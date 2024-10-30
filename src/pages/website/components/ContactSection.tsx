import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-pink-100" id='contact'>
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto flex max-w-sm flex-col justify-between gap-10"
            >
              <div className="text-center lg:text-left">
                <h2 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Get in Touch
                </h2>
                <p className="mt-4 text-lg text-gray-600 sm:text-xl">
                  We're here for your questions, feedback, or collaboration opportunities. Let us know how we can help!
                </p>
              </div>
              <div className="mx-auto w-fit lg:mx-0">
                <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                  Contact Details
                </h3>
                <ul className="ml-4 list-disc space-y-2">
                  <li>
                    <span className="font-bold">Phone: </span>
                    (123) 456-7890
                  </li>
                  <li>
                    <span className="font-bold">Email: </span>
                    <a href="mailto:contact@example.com" className="text-indigo-600 underline hover:text-indigo-800">
                      contact@example.com
                    </a>
                  </li>
                  <li>
                    <span className="font-bold">Address: </span>
                    123 Business St, Suite 100, City, State 12345
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border bg-white p-8 shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex gap-4">
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      type="text" 
                      id="firstName" 
                      name="firstName"
                      placeholder="First Name" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      type="text" 
                      id="lastName" 
                      name="lastName"
                      placeholder="Last Name" 
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    placeholder="Type your message here." 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button className="w-full" type="submit">Send Message</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-0 w-full bg-gray-900 py-4 text-center text-sm text-white">
        <p>&copy; {new Date().getFullYear()} Tozon, Inc All rights reserved.</p>
      </footer>
    </section>
  )
}