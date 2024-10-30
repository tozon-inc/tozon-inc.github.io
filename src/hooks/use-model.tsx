import { useState, useEffect } from 'react'
import { openDB, IDBPDatabase } from 'idb'

interface ModelData {
    modelId: string
    data: ArrayBuffer
    timestamp: number
}

const DB_NAME = 'WebLLMModels'
const STORE_NAME = 'models'
const MODEL_EXPIRY_TIME = 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds

async function openDatabase(): Promise<IDBPDatabase> {
    return openDB(DB_NAME, 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'modelId' })
            }
        },
    })
}

export function useLocalModel(modelId: string) {
    const [modelData, setModelData] = useState<ArrayBuffer | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        async function loadModel() {
            try {
                setIsLoading(true)
                setError(null)

                const db = await openDatabase()
                const transaction = db.transaction(STORE_NAME, 'readonly')
                const store = transaction.objectStore(STORE_NAME)
                const storedModel = await store.get(modelId) as ModelData | undefined

                if (storedModel && Date.now() - storedModel.timestamp < MODEL_EXPIRY_TIME) {
                    setModelData(storedModel.data)
                } else {
                    setModelData(null)
                }
            } catch (err) {
                console.error('Error loading model from IndexedDB:', err)
                setError(err instanceof Error ? err : new Error('Unknown error occurred'))
                setModelData(null)
            } finally {
                setIsLoading(false)
            }
        }

        loadModel()
    }, [modelId])

    const saveModel = async (data: ArrayBuffer) => {
        try {
            const db = await openDatabase()
            const transaction = db.transaction(STORE_NAME, 'readwrite')
            const store = transaction.objectStore(STORE_NAME)

            const modelData: ModelData = {
                modelId,
                data,
                timestamp: Date.now(),
            }

            await store.put(modelData)
            setModelData(data)
        } catch (err) {
            console.error('Error saving model to IndexedDB:', err)
            throw err instanceof Error ? err : new Error('Unknown error occurred while saving model')
        }
    }

    const clearModel = async () => {
        try {
            const db = await openDatabase()
            const transaction = db.transaction(STORE_NAME, 'readwrite')
            const store = transaction.objectStore(STORE_NAME)

            await store.delete(modelId)
            setModelData(null)
        } catch (err) {
            console.error('Error clearing model from IndexedDB:', err)
            throw err instanceof Error ? err : new Error('Unknown error occurred while clearing model')
        }
    }

    return { modelData, isLoading, error, saveModel, clearModel }
}