import React from 'react';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, FileText, Award, TrendingUp, Newspaper, Users, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import {
  professorData,
  researchInterests,
  areasOfExpertise,
  employmentHistory,
  education,
  publicationAreas,
  publicationStats,
  mediaCoverage,
  professionalAssociations
} from '../mock';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-900 rounded flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">{professorData.name}</h1>
                <p className="text-xs text-gray-600">{professorData.university}</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#profile" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Profile</a>
              <a href="#research" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Research</a>
              <a href="#employment" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Employment</a>
              <a href="#education" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Education</a>
              <a href="#publications" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Publications</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <img 
                src={professorData.profileImage} 
                alt={professorData.name}
                className="w-56 h-56 rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-3">
                Professor {professorData.name}
              </h1>
              <p className="text-2xl mb-2">{professorData.nameKorean}</p>
              <p className="text-xl text-blue-100 mb-2">{professorData.title}</p>
              <p className="text-lg text-blue-200 mb-6">{professorData.department}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                  <div className="text-3xl font-bold">{publicationStats[0].value}</div>
                  <div className="text-sm text-blue-200">{publicationStats[0].label}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                  <div className="text-3xl font-bold">{publicationStats[1].value}</div>
                  <div className="text-sm text-blue-200">{publicationStats[1].label}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                  <div className="text-3xl font-bold">{publicationStats[2].value}</div>
                  <div className="text-sm text-blue-200">{publicationStats[2].label}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Profile Section */}
      <section id="profile" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Professional Profile</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {professorData.bio}
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Expertise</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {professorData.expertise}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Research Interests Section */}
      <section id="research" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Research Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {researchInterests.map((interest) => (
              <Card key={interest.id} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-600 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{interest.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Areas of Expertise */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Areas of Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {areasOfExpertise.map((area, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{area}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Employment History Section */}
      <section id="employment" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Employment History</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-8">
                {employmentHistory.map((job, index) => (
                  <div key={job.id}>
                    {index > 0 && <Separator className="my-8" />}
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                          <Briefcase className="w-7 h-7 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-2">{job.years}</Badge>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.position}</h3>
                        <p className="text-gray-600">{job.organization}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu) => (
              <Card key={edu.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{edu.degree}</CardTitle>
                  <CardDescription className="text-base">{edu.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-blue-600 text-white">{edu.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Publications Section */}
      <section id="publications" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Publications</h2>
          <p className="text-xl text-gray-600 mb-8">Selected highlights from 270+ publications</p>
          
          <div className="space-y-8">
            {publicationAreas.map((area) => (
              <Card key={area.id} className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">{area.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {area.topics.map((topic, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Publication Statistics */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {publicationStats.map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="pt-6 text-center">
                  <div className="text-5xl font-bold text-blue-900 mb-2">{stat.value}</div>
                  <div className="text-lg text-gray-700">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Media Coverage & Expert Commentary</h2>
          <p className="text-xl text-gray-600 mb-8">Frequently consulted by major Korean media outlets</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {mediaCoverage.map((media) => (
              <Card key={media.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Newspaper className="w-6 h-6 text-blue-600" />
                    <CardTitle className="text-xl text-gray-900">{media.topic}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{media.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Professional Associations */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="w-7 h-7 text-blue-600" />
                <CardTitle className="text-2xl text-gray-900">Professional Associations</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {professionalAssociations.map((association, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{association}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact & Collaboration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Name</p>
                  <p className="text-lg font-semibold text-gray-900">{professorData.name} ({professorData.nameKorean})</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Title</p>
                  <p className="text-lg text-gray-900">{professorData.title}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href={`mailto:${professorData.email}`} className="text-gray-900 hover:text-blue-600 transition-colors">
                      {professorData.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href={`tel:${professorData.phone}`} className="text-gray-900 hover:text-blue-600 transition-colors">
                      {professorData.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Institution</p>
                    <p className="text-gray-900">{professorData.department}</p>
                    <p className="text-gray-700">{professorData.university}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl">Research Collaboration</CardTitle>
                <CardDescription className="text-base">Professor Kang welcomes collaboration opportunities in transportation research, policy development, and academic partnerships.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white text-lg py-6">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Collaboration Inquiry
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Professor {professorData.name}</h3>
              <p className="text-gray-400">{professorData.department}</p>
              <p className="text-gray-400">{professorData.university}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">© 2024 All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;