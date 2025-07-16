import PublicLayout from "@/components/public-layout"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Award, GraduationCap, Scale, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Munish Mittal</h1>
              <p className="text-xl text-gray-600 mb-6">
                A dedicated lawyer with over 23 years of experience in civil, criminal, revenue litigation, property law, arbitration law, marriage and contract
                disputes. Committed to providing exceptional legal representation and achieving the best outcomes for
                clients.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">23+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">1000+</div>
                  <div className="text-sm text-gray-600">Cases Won</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/papa_main2.jpg?height=600&width=500"
                alt="Munish Mittal in his law office"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Education & Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <Card>
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Bar Admissions</h3>
                <p className="text-gray-600 mb-2">Bar Council of Punjab, Haryana and Chandigarh, 2002</p>
                <p className="text-sm text-gray-500">District Court of Patiala, 2002</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Professional Experience</h2>
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Scale className="h-8 w-8 text-amber-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Director</h3>
                    <p className="text-amber-600 font-medium mb-2">Munish Mittal and Associates (2015 - Present)</p>
                    <p className="text-gray-600">
                      Leading a team of attorneys specializing in civil, criminal, matrimonial and revenue litigation and property disputes. Successfully
                      represented over 500 clients with a 90% success rate.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-8 w-8 text-amber-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Associate Attorney</h3>
                    <p className="text-amber-600 font-medium mb-2">Rakesh Gupta and Associates (2002 - 2014)</p>
                    <p className="text-gray-600">
                      Specialized in contract law and commercial litigation including civil, revenue and matrimonial litigation. Gained extensive experience in courtroom
                      advocacy and client representation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bar Council & Community */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Community Involvement</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">District Bar Association Member</h3>
                <p className="text-gray-600">
                  Elected Executive Member (2003) and thereafter Secretary (2018) of the  District Bar Association, Patiala advocating for legal reform and professional standards.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Pro Bono Work</h3>
                <p className="text-gray-600">
                  Providing free legal services to underserved communities and non-profit organizations and also appointed as Pro-Bono lawyer by District Legal Service Authority, Patiala.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Legal Education</h3>
                <p className="text-gray-600">
                  Guest lecturer at local law schools and continuing education programs for attorneys and new entrants in this noble profession.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}
