
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Moon, Sun, Mail, Phone, User, Briefcase, Target, Award } from "lucide-react";
import profileImage from "./assets/Gideon_profile1.jpeg";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleGetInTouch = () => {
    console.log("Get In Touch button clicked");
    const emailUrl = "mailto:gideonmwas45@gmail.com?subject=Professional Inquiry&body=Hello Gideon,%0D%0A%0D%0AI am interested in discussing potential opportunities with you.%0D%0A%0D%0ABest regards,";
    window.location.href = emailUrl;
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
         
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600" />
            )}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
           {/* Profile Image on Left */}
        <div className="flex-1 flex justify-center">
           <img
          src={profileImage}
          alt="Gideon Mwangi - Professional Portrait"
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover shadow-lg"
        />
         
        </div>

       {/* Text Content on Right */}
       <div className="flex-1 text-center lg:text-left">
        <h1 className="text-5xl font-bold mb-4 text-blue-700 dark:text-blue-200">
          Gideon Mwangi
       </h1>
       <p className="text-xl text-blue-200 mb-6 font-medium">
         Financial Professional & Audit Specialist
      </p>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
          Results-oriented Business Administration graduate with expertise in financial analysis, 
          auditing, and client relationship management. Committed to driving business growth through 
          innovative financial solutions and exceptional client service.
      </p>
     <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <Button
        onClick={handleGetInTouch}
        size="lg"
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
         <Mail className="mr-2 h-5 w-5" />
            Get In Touch
           </Button>
           <Button
               variant="outline"
               size="lg"
               className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
               onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Experience
            </Button>
           </div>
          </div>
         </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-white dark:bg-gray-800 py-6 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Phone className="h-4 w-4 text-blue-600" />
              <span>+254 717 046 253</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Mail className="h-4 w-4 text-blue-600" />
              <span>gideonmwas45@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <User className="h-4 w-4 text-blue-600" />
              <span>English & Kiswahili</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-0 py-0 space-y-0">
        {/* About Me Section */}
        <section>
          <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-gray-700 dark:to-gray-800">
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <User className="h-6 w-6 text-blue-600" />
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                I am a highly motivated and results-oriented graduate from Dedan Kimathi University of Technology, 
                holding a Second-Class Upper Division Bachelor's degree in Business Administration with a specialization 
                in Accounting and Finance. My academic foundation, combined with practical experience in financial 
                management and auditing, has equipped me with strong analytical, communication, and interpersonal skills.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                I am particularly adept at building rapport and providing excellent client service, making me well-suited 
                for roles in personal banking and relationship management. My commitment to continuous professional 
                development is demonstrated through my active membership in the CPA Society and my pursuit of advanced 
                certifications. I am eager to leverage my financial expertise and dedication to client satisfaction 
                to contribute meaningfully to a dynamic financial institution.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* ... keep existing code for all other sections (Career Objective, Professional Profile, Experience, Education & Skills, Key Achievements) */}

        {/* Career Objective */}
        <section>
          <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-700 dark:to-gray-800">
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Target className="h-6 w-6 text-emerald-600" />
                Career Objective
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                To contribute to a dynamic financial institution by applying my comprehensive understanding of financial 
                principles, exceptional interpersonal skills, and innovative problem-solving abilities to build lasting 
                client relationships and drive business growth. I am committed to continuous professional development 
                and being a valuable part of a team that values integrity, collaboration, and outstanding performance.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Professional Summary */}
        <section>
          <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50 dark:from-gray-700 dark:to-gray-800">
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-blue-600" />
                Professional Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                Highly motivated and results-oriented graduate with a Second-Class Upper Division Bachelor's degree 
                in Business Administration (Accounting and Finance option) from Dedan Kimathi University of Technology. 
                Strong foundation in financial analysis, accounting principles, and data interpretation, complemented by 
                practical experience in financial management and auditing. Committed to excellence in client service 
                and driving business growth in the financial sector.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <h2 className="text-3xl font-bold text-blue-800 mb-0 text-center">
            Professional Experience
          </h2>

          <div className="space-y-0">
            {/* Current Role */}
            <Card className="border-l-4 border-l-blue-600 shadow-lg bg-white dark:bg-gray-800">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                      Audit Intern
                    </CardTitle>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      KKCO East Africa LLP
                    </p>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 w-fit">
                    January 2024 - Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Verified accuracy of accounts payable by comparing invoices against purchase orders, enhancing financial integrity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Reconciled bank statements with company records ensuring 100% alignment and prompt discrepancy identification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Conducted precise inventory counts and utilized audit software for comprehensive data analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Previous Role */}
            <Card className="border-l-4 border-l-slate-500 shadow-lg bg-white dark:bg-gray-800">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                      Accounting and Finance Attaché
                    </CardTitle>
                    <p className="text-slate-600 dark:text-slate-400 font-semibold">
                      Eldoret Quarry Limited
                    </p>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    October 2023 - December 2023
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Managed financial transactions achieving 98% accuracy and strict policy compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Prepared comprehensive financial statements and analysis supporting strategic decision-making</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Achieved 5% reduction in operational costs through optimized resource allocation and cost accounting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education & Skills Grid */}
        <section className="grid md:grid-cols-2 gap-0">
          {/* Education */}
          <Card className="shadow-lg bg-white dark:bg-gray-800">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-700 dark:to-gray-800">
              <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                Education & Certification
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Bachelor of Business Administration
                </h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                  Accounting and Finance Option
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Dedan Kimathi University of Technology
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">
                  2021 - 2024 | Second Class Upper Division
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Professional Membership
                </h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                  CPA Society Member
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Currently pursuing CPA 3 (Intermediate Level)
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">
                  Exams scheduled: August 2025
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Key Skills */}
          <Card className="shadow-lg bg-white dark:bg-gray-800">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800">
              <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                Core Competencies
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Technical Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Financial Analysis",
                      "Audit & Compliance",
                      "Tax Preparation",
                      "Microsoft Office Suite",
                      "Data Analysis",
                      "Financial Reporting"
                    ].map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Professional Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Client Relations",
                      "Team Leadership",
                      "Problem Solving",
                      "Communication",
                      "Time Management"
                    ].map((skill) => (
                      <Badge key={skill} variant="outline" className="border-indigo-200 text-indigo-700 dark:border-indigo-700 dark:text-indigo-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Achievements */}
        <section>
          <Card className="shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white text-center flex items-center justify-center gap-2">
                <Award className="h-6 w-6 text-blue-600" />
                Key Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Financial Accuracy Enhancement",
                    description: "Enhanced client financial accuracy through systematic account reconciliations and discrepancy identification"
                  },
                  {
                    title: "Process Improvement",
                    description: "Streamlined audit processes, facilitating timely reviews and ensuring regulatory compliance"
                  },
                  {
                    title: "Cost Optimization",
                    description: "Achieved 5% reduction in operational costs through optimized resource allocation"
                  },
                  {
                    title: "Strategic Support",
                    description: "Provided critical financial insights to management, supporting data-driven strategic decisions"
                  }
                ].map((achievement, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Let's Build Financial Success Together</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I bring proven expertise in financial analysis, audit compliance, and client relationship management. 
            Ready to contribute to your organization's growth and deliver exceptional results. Let's discuss how 
            my skills can add value to your team.
          </p>
          <Button
            onClick={handleGetInTouch}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Mail className="mr-2 h-5 w-5" />
            Schedule a Discussion
          </Button>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              © 2024 Gideon Mwangi. Professional Portfolio
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

