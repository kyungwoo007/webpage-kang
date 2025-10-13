import React from 'react';
import { Mail, Phone, MapPin, Clock, BookOpen, GraduationCap, FileText, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { professorData, researchInterests, publications, courses, news } from '../mock';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">{professorData.name}</h1>
                <p className="text-sm text-gray-600">{professorData.university}</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#research" className="text-gray-700 hover:text-blue-600 transition-colors">Research</a>
              <a href="#publications" className="text-gray-700 hover:text-blue-600 transition-colors">Publications</a>
              <a href="#teaching" className="text-gray-700 hover:text-blue-600 transition-colors">Teaching</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDB8fHx8MTc2MDMzNTQ4Mnww&ixlib=rb-4.1.0&q=85" 
            alt="Campus" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <img 
                src={professorData.profileImage} 
                alt={professorData.name}
                className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                {professorData.name}
              </h1>
              <p className="text-xl text-gray-700 mb-2">{professorData.title}</p>
              <p className="text-lg text-gray-600 mb-6">{professorData.department}</p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Award className="w-4 h-4 mr-2" />
                  50+ Publications
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <BookOpen className="w-4 h-4 mr-2" />
                  4 Courses
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                {professorData.bio}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Research Interests Section */}
      <section id="research" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchInterests.map((interest) => (
              <Card key={interest.id} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{interest.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Selected Publications</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <div key={pub.id}>
                    {index > 0 && <Separator className="my-6" />}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <FileText className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline">{pub.year}</Badge>
                          <Badge variant="secondary">{pub.type}</Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{pub.title}</h3>
                        <p className="text-sm text-gray-600 mb-1">{pub.authors}</p>
                        <p className="text-sm text-gray-500 italic">{pub.venue}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Teaching</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-sm">{course.code}</Badge>
                    <Badge className="bg-blue-600 text-white">{course.level}</Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{course.name}</CardTitle>
                  <CardDescription>{course.semester}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{course.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
                    <p className="text-gray-900">{professorData.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Office</p>
                    <p className="text-gray-900">{professorData.office}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Office Hours</p>
                    <p className="text-gray-900">{professorData.officeHours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>Send me a message for research collaboration or inquiries</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2024 {professorData.name}. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-gray-400" />
              <p className="text-gray-400">{professorData.university}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;