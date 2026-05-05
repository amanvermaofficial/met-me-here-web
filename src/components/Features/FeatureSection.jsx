import React from 'react'
import FeatureBlock from './FeatureBlock'
import { Phone, ParkingCircle, DollarSign } from "lucide-react";

function FeatureSection() {
  return (
    <div className="bg-gray-50">
      <FeatureBlock
        title="Contact Vehicle Owners Privately"
        description="Never share your mobile number again. Connect with vehicle owners instantly through our secure internet calling system. Simply scan the QR code on any vehicle and start a conversation without revealing your personal contact information."
        features={[
          "100% Private - Your number stays hidden",
          "No app installation required for calling",
          "Crystal clear internet voice calls",
          "Instant notification to vehicle owner",
        ]}
        image="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
        icon={<Phone className="text-blue-600" size={30} />}
        tickColor='text-blue-600'
        badgeDotColor="bg-blue-600"
        buttonVariant="primary"
      />

      {/* Section 2 */}
      <FeatureBlock
        reverse
        badge="Core Feature"
        title="Rent Parking Anywhere, Anytime"
        description="Finding parking in busy cities is a nightmare. Browse available parking spaces near your destination and book them instantly. Whether you need parking for an hour or a month, we've got you covered."
        features={[
          "Real-time availability updates",
          "Hourly, daily, or monthly rates",
          "Secure payment gateway",
          "Navigate directly to your spot",
        ]}
        image="https://images.unsplash.com/photo-1506521781263-d8422e82f27a"
        icon={<ParkingCircle className="text-black" size={30} />}
        tickColor='text-black'
        badgeDotColor="bg-black"
        buttonVariant="outline"

      />

      {/* Section 3 */}
      <FeatureBlock
        badge="Core Feature"
        title="Earn Money by Selling Parking"
        description="Own a parking space you don't use? Turn it into a revenue stream. List your parking spot for sale and connect with buyers looking for permanent parking solutions in your area."
        features={[
          "Set your own selling price",
          "Verified buyer profiles",
          "Secure transaction process",
          "Legal documentation support",
        ]}
        image="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
        icon={<DollarSign className="text-green-600" size={30} />}
        tickColor='text-green-600'
        badgeDotColor="bg-green-600"
        buttonVariant="secondary"
      />

    </div>
  )
}

export default FeatureSection
