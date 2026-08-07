"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Check,
  ChevronRight,
  ChevronLeft,
  Edit2,
  X,
  Plane,
  MapPin,
  Calendar,
  User,
} from "lucide-react"

const tripTypes = ["One Way", "Round Trip", "Multi-Leg"]

const aircraftCategories = [
  "Light Helicopter (AS350 / Bell 206)",
  "Medium Helicopter (Bell 412)",
  "Heavy Helicopter (H225 Super Puma)",
  "No Preference",
]

const passengerCounts = ["1-2", "3-4", "5-6", "7-9", "10-15", "16+"]

const transitionProps = {
  type: "spring" as const,
  stiffness: 500,
  damping: 30,
  mass: 0.5,
}

function ChipButton({
  label,
  isSelected,
  onClick,
}: {
  label: string
  isSelected: boolean
  onClick: () => void
}) {
  return (
    <motion.button
      onClick={onClick}
      layout
      initial={false}
      animate={{
        backgroundColor: isSelected ? "#18181b" : "rgba(241, 245, 249, 1)",
      }}
      whileHover={{
        backgroundColor: isSelected ? "#27272a" : "rgba(226, 232, 240, 1)",
      }}
      whileTap={{
        backgroundColor: isSelected ? "#3f3f46" : "rgba(203, 213, 225, 1)",
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 0.5,
        backgroundColor: { duration: 0.1 },
      }}
      className={`
        inline-flex items-center px-4 py-2.5 rounded-full text-sm font-medium
        whitespace-nowrap overflow-hidden border
        ${isSelected ? "text-white border-zinc-800" : "text-slate-700 border-slate-200"}
      `}
    >
      <motion.div
        className="relative flex items-center"
        animate={{
          width: isSelected ? "auto" : "100%",
          paddingRight: isSelected ? "1.5rem" : "0",
        }}
        transition={{
          ease: [0.175, 0.885, 0.32, 1.275],
          duration: 0.3,
        }}
      >
        <span>{label}</span>
        <AnimatePresence>
          {isSelected && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
                mass: 0.5,
              }}
              className="absolute right-0"
            >
              <div className="w-4 h-4 rounded-full bg-zinc-800 flex items-center justify-center">
                <Check className="w-3 h-3 text-white" strokeWidth={2} />
              </div>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  )
}

function InputField({
  label,
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}: {
  label: string
  icon?: React.ElementType
  type?: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  required?: boolean
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full ${Icon ? "pl-10" : "pl-4"} pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent transition-all text-sm`}
        />
      </div>
    </div>
  )
}

function TextAreaField({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700">{label}</label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent transition-all text-sm resize-none"
      />
    </div>
  )
}

interface CharterRequestFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function CharterRequestForm({ isOpen, onClose }: CharterRequestFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Step 1
  const [tripType, setTripType] = useState("")
  // Step 2
  const [departureLocation, setDepartureLocation] = useState("")
  const [arrivalLocation, setArrivalLocation] = useState("")
  const [departureDate, setDepartureDate] = useState("")
  const [departureTime, setDepartureTime] = useState("")
  const [returnDate, setReturnDate] = useState("")
  const [returnTime, setReturnTime] = useState("")
  // Step 3
  const [passengerCount, setPassengerCount] = useState("")
  const [aircraftPreference, setAircraftPreference] = useState("")
  // Step 4
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [company, setCompany] = useState("")
  const [additionalInfo, setAdditionalInfo] = useState("")

  const totalSteps = 5

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const resetForm = () => {
    setCurrentStep(1)
    setTripType("")
    setDepartureLocation("")
    setArrivalLocation("")
    setDepartureDate("")
    setDepartureTime("")
    setReturnDate("")
    setReturnTime("")
    setPassengerCount("")
    setAircraftPreference("")
    setFullName("")
    setEmail("")
    setPhone("")
    setCompany("")
    setAdditionalInfo("")
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    const formData = {
      tripType,
      departureLocation,
      arrivalLocation,
      departureDate,
      departureTime,
      returnDate,
      returnTime,
      passengerCount,
      aircraftPreference,
      fullName,
      email,
      phone,
      company,
      additionalInfo,
    }

    try {
      const response = await fetch("https://formspree.io/f/mqpzavaa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Your charter request has been submitted! We will contact you shortly.")
        onClose()
        resetForm()
      } else {
        alert("Something went wrong. Please try again or email contact@achi-tx.com")
      }
    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return tripType !== ""
      case 2:
        return departureLocation !== "" && arrivalLocation !== "" && departureDate !== ""
      case 3:
        return passengerCount !== ""
      case 4:
        return fullName !== "" && email !== "" && phone !== ""
      case 5:
        return true
      default:
        return false
    }
  }

  const stepTitles = ["Trip Type", "Flight Details", "Passengers", "Contact Info", "Review"]

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                  <Plane className="w-5 h-5 text-zinc-700" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Charter Request</h2>
                  <p className="text-sm text-slate-500">Request a quote for your flight</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-slate-600" />
              </button>
            </div>

            {/* Progress */}
            <div className="px-6 py-4 border-b border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-slate-500">
                  Step {currentStep} of {totalSteps}: {stepTitles[currentStep - 1]}
                </span>
                <span className="text-xs font-medium text-zinc-600">
                  {Math.round((currentStep / totalSteps) * 100)}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-zinc-900"
                  initial={{ width: "0%" }}
                  animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentStep === 1 && (
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        What type of trip are you planning?
                      </h3>
                      <p className="text-slate-500 text-sm mb-8">Select your trip type to get started</p>
                      <motion.div className="flex flex-wrap gap-3" layout transition={transitionProps}>
                        {tripTypes.map((type) => (
                          <ChipButton
                            key={type}
                            label={type}
                            isSelected={tripType === type}
                            onClick={() => setTripType(type)}
                          />
                        ))}
                      </motion.div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Flight Details</h3>
                      <p className="text-slate-500 text-sm mb-8">Tell us about your departure and arrival</p>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <InputField
                            label="Departure Location"
                            icon={MapPin}
                            placeholder="City, Airport, or Address"
                            value={departureLocation}
                            onChange={setDepartureLocation}
                            required
                          />
                          <InputField
                            label="Arrival Location"
                            icon={MapPin}
                            placeholder="City, Airport, or Address"
                            value={arrivalLocation}
                            onChange={setArrivalLocation}
                            required
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <InputField
                            label="Departure Date"
                            icon={Calendar}
                            type="date"
                            value={departureDate}
                            onChange={setDepartureDate}
                            required
                          />
                          <InputField
                            label="Departure Time (Optional)"
                            type="time"
                            value={departureTime}
                            onChange={setDepartureTime}
                          />
                        </div>
                        {tripType === "Round Trip" && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField
                              label="Return Date"
                              icon={Calendar}
                              type="date"
                              value={returnDate}
                              onChange={setReturnDate}
                            />
                            <InputField
                              label="Return Time (Optional)"
                              type="time"
                              value={returnTime}
                              onChange={setReturnTime}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Passengers & Aircraft</h3>
                      <p className="text-slate-500 text-sm mb-8">
                        How many passengers and any aircraft preference?
                      </p>
                      <div className="mb-8">
                        <label className="block text-sm font-medium text-slate-700 mb-3">
                          Number of Passengers <span className="text-red-500">*</span>
                        </label>
                        <motion.div className="flex flex-wrap gap-3" layout transition={transitionProps}>
                          {passengerCounts.map((count) => (
                            <ChipButton
                              key={count}
                              label={count}
                              isSelected={passengerCount === count}
                              onClick={() => setPassengerCount(count)}
                            />
                          ))}
                        </motion.div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-3">
                          Aircraft Preference (Optional)
                        </label>
                        <motion.div className="flex flex-wrap gap-3" layout transition={transitionProps}>
                          {aircraftCategories.map((aircraft) => (
                            <ChipButton
                              key={aircraft}
                              label={aircraft}
                              isSelected={aircraftPreference === aircraft}
                              onClick={() => setAircraftPreference(aircraft)}
                            />
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Contact Information</h3>
                      <p className="text-slate-500 text-sm mb-8">How can we reach you with your quote?</p>
                      <div className="space-y-4">
                        <InputField
                          label="Full Name"
                          icon={User}
                          placeholder="John Smith"
                          value={fullName}
                          onChange={setFullName}
                          required
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <InputField
                            label="Email Address"
                            type="email"
                            placeholder="john@example.com"
                            value={email}
                            onChange={setEmail}
                            required
                          />
                          <InputField
                            label="Phone Number"
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={phone}
                            onChange={setPhone}
                            required
                          />
                        </div>
                        <InputField
                          label="Company (Optional)"
                          placeholder="Your company name"
                          value={company}
                          onChange={setCompany}
                        />
                        <TextAreaField
                          label="Additional Information (Optional)"
                          placeholder="Any special requirements, cargo details, or other notes..."
                          value={additionalInfo}
                          onChange={setAdditionalInfo}
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 5 && (
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Review Your Request</h3>
                      <p className="text-slate-500 text-sm mb-8">Please verify all details before submitting</p>
                      <div className="space-y-4">
                        <div className="p-4 border border-slate-200 bg-slate-50 rounded-xl">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-slate-900">Trip Details</h4>
                            <button
                              onClick={() => setCurrentStep(1)}
                              className="text-zinc-600 hover:text-zinc-800 transition-colors flex items-center gap-1 text-sm"
                            >
                              <Edit2 className="w-3 h-3" /> Edit
                            </button>
                          </div>
                          <div className="text-sm text-slate-600 space-y-1">
                            <p><span className="font-medium">Type:</span> {tripType}</p>
                            <p><span className="font-medium">From:</span> {departureLocation}</p>
                            <p><span className="font-medium">To:</span> {arrivalLocation}</p>
                            <p>
                              <span className="font-medium">Date:</span> {departureDate}
                              {departureTime && ` at ${departureTime}`}
                            </p>
                            {tripType === "Round Trip" && returnDate && (
                              <p>
                                <span className="font-medium">Return:</span> {returnDate}
                                {returnTime && ` at ${returnTime}`}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="p-4 border border-slate-200 bg-slate-50 rounded-xl">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-slate-900">Passengers & Aircraft</h4>
                            <button
                              onClick={() => setCurrentStep(3)}
                              className="text-zinc-600 hover:text-zinc-800 transition-colors flex items-center gap-1 text-sm"
                            >
                              <Edit2 className="w-3 h-3" /> Edit
                            </button>
                          </div>
                          <div className="text-sm text-slate-600 space-y-1">
                            <p><span className="font-medium">Passengers:</span> {passengerCount}</p>
                            {aircraftPreference && (
                              <p><span className="font-medium">Aircraft:</span> {aircraftPreference}</p>
                            )}
                          </div>
                        </div>

                        <div className="p-4 border border-slate-200 bg-slate-50 rounded-xl">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-slate-900">Contact Information</h4>
                            <button
                              onClick={() => setCurrentStep(4)}
                              className="text-zinc-600 hover:text-zinc-800 transition-colors flex items-center gap-1 text-sm"
                            >
                              <Edit2 className="w-3 h-3" /> Edit
                            </button>
                          </div>
                          <div className="text-sm text-slate-600 space-y-1">
                            <p><span className="font-medium">Name:</span> {fullName}</p>
                            <p><span className="font-medium">Email:</span> {email}</p>
                            <p><span className="font-medium">Phone:</span> {phone}</p>
                            {company && <p><span className="font-medium">Company:</span> {company}</p>}
                            {additionalInfo && (
                              <p><span className="font-medium">Notes:</span> {additionalInfo}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-slate-100 px-6 py-4 flex justify-between items-center">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  currentStep === 1
                    ? "opacity-0 pointer-events-none"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>

              {currentStep < totalSteps ? (
                <button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    canProceed()
                      ? "bg-black text-white hover:bg-zinc-900"
                      : "bg-slate-100 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  Continue
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium bg-black text-white hover:bg-zinc-900 transition-all disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                  {!isSubmitting && <Check className="w-4 h-4" />}
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}