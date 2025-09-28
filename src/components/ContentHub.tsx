import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  BookOpen, 
  Users, 
  Trophy, 
  Star,
  Eye,
  Clock,
  TrendingUp,
  Heart,
  Share,
  MessageSquare,
  Calendar,
  Award,
  Zap,
  Target,
  Video,
  FileText,
  Podcast
} from "lucide-react";

const ContentHub = () => {
  const [activeTab, setActiveTab] = useState("highlights");

  const featuredBattles = [
    {
      id: 1,
      title: "Epic Coding Showdown: AI vs Human",
      thumbnail: "/battle-thumb-1.jpg",
      challenger: "CodeMaster_Pro",
      opponent: "AI_Champion_V2",
      views: "127K",
      duration: "45:32",
      category: "Algorithm Challenge",
      status: "Trending",
      description: "Watch the most intense coding battle of the year as our top human challenger faces off against our advanced AI.",
      highlights: ["Record-breaking optimization", "Crowd favorite", "Multiple plot twists"]
    },
    {
      id: 2,
      title: "Global Championship Finals",
      thumbnail: "/battle-thumb-2.jpg", 
      challenger: "Lightning_Fast",
      opponent: "Code_Ninja_2024",
      views: "89K",
      duration: "32:18",
      category: "Speed Coding",
      status: "Live",
      description: "The final showdown for the Global Championship title. Two legends compete for ultimate glory.",
      highlights: ["Championship deciding match", "Live audience", "Prize pool: $50K"]
    },
    {
      id: 3,
      title: "Beginner's Breakthrough Moment",
      thumbnail: "/battle-thumb-3.jpg",
      challenger: "FirstTimer_Alex",
      opponent: "Veteran_Coder",
      views: "234K",
      duration: "28:45", 
      category: "Mentorship Battle",
      status: "Popular",
      description: "An inspiring underdog story as a complete beginner takes on a seasoned veteran in this mentorship battle.",
      highlights: ["Inspirational comeback", "Learning focused", "Community favorite"]
    }
  ];

  const creators = [
    {
      name: "Sarah Chen",
      handle: "@code_queen",
      avatar: "SC",
      followers: "45K",
      specialization: "Algorithm Optimization",
      rank: "Legend",
      totalEarnings: "$89K",
      winRate: "94%",
      contentType: "Educational Battles",
      recentVideo: "5 Advanced Algorithms Every Coder Should Know"
    },
    {
      name: "Marcus Rodriguez", 
      handle: "@speed_demon",
      avatar: "MR",
      followers: "32K",
      specialization: "Speed Coding",
      rank: "Champion", 
      totalEarnings: "$67K",
      winRate: "87%",
      contentType: "Speed Challenges",
      recentVideo: "Breaking Speed Records: Live Coding Session"
    },
    {
      name: "Yuki Tanaka",
      handle: "@zen_coder",
      avatar: "YT", 
      followers: "58K",
      specialization: "Code Architecture",
      rank: "Legend",
      totalEarnings: "$112K",
      winRate: "91%",
      contentType: "Architecture Deep Dives",
      recentVideo: "Building Scalable Systems Under Pressure"
    }
  ];

  const educationalContent = [
    {
      type: "Video Series",
      icon: Video,
      title: "From Zero to Legend: Complete Battle Guide",
      episodes: 12,
      duration: "6h 30m",
      level: "Beginner to Advanced",
      instructor: "Battle Master Pro",
      rating: 4.9,
      students: "15K+"
    },
    {
      type: "Interactive Guide",
      icon: BookOpen, 
      title: "Algorithm Battle Strategies",
      chapters: 8,
      duration: "3h 15m",
      level: "Intermediate",
      instructor: "Dr. Code Strategy",
      rating: 4.8,
      students: "8K+"
    },
    {
      type: "Podcast",
      icon: Podcast,
      title: "Challenger Mindset: Mental Preparation",
      episodes: 24,
      duration: "12h 45m", 
      level: "All Levels",
      instructor: "Mind Coach Alex",
      rating: 4.7,
      students: "22K+"
    },
    {
      type: "Workshop",
      icon: Users,
      title: "Live Battle Analysis Sessions",
      sessions: "Weekly",
      duration: "1h 30m",
      level: "Intermediate+",
      instructor: "Community Experts",
      rating: 4.9,
      students: "5K+"
    }
  ];

  const latestNews = [
    {
      date: "2024-01-15",
      category: "Tournament",
      title: "Global Championship 2024 Registration Now Open",
      excerpt: "The biggest skill challenge tournament of the year is accepting registrations. $500K total prize pool.",
      readTime: "3 min",
      trending: true
    },
    {
      date: "2024-01-12", 
      category: "Feature",
      title: "New AI Sparring Partner Released", 
      excerpt: "Practice against our latest AI challenger with adaptive difficulty and personalized feedback.",
      readTime: "2 min",
      trending: false
    },
    {
      date: "2024-01-10",
      category: "Community",
      title: "Creator Program Expansion: New Monetization Options",
      excerpt: "Enhanced revenue sharing and exclusive creator tools now available for qualified challengers.",
      readTime: "4 min", 
      trending: true
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-elevation-1 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-purple-500 text-purple-400">
            <Star className="w-4 h-4 mr-2" />
            Content Hub
          </Badge>
          <h2 className="text-heading-lg mb-4">Learn, Watch, Compete</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Explore epic battles, learn from masters, and join a thriving community of skilled challengers 
            sharing knowledge and pushing boundaries.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-elevation-2 border border-border mb-12">
            <TabsTrigger value="highlights" className="data-[state=active]:bg-brand-red data-[state=active]:text-white">
              <Trophy className="w-4 h-4 mr-2" />
              Battle Highlights
            </TabsTrigger>
            <TabsTrigger value="creators" className="data-[state=active]:bg-brand-red data-[state=active]:text-white">
              <Users className="w-4 h-4 mr-2" />
              Top Creators
            </TabsTrigger>
            <TabsTrigger value="learn" className="data-[state=active]:bg-brand-red data-[state=active]:text-white">
              <BookOpen className="w-4 h-4 mr-2" />
              Learn & Grow
            </TabsTrigger>
            <TabsTrigger value="news" className="data-[state=active]:bg-brand-red data-[state=active]:text-white">
              <FileText className="w-4 h-4 mr-2" />
              Latest News
            </TabsTrigger>
          </TabsList>

          {/* Battle Highlights Tab */}
          <TabsContent value="highlights" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBattles.map((battle) => (
                <Card key={battle.id} className="bg-elevation-2 border-border hover:border-brand-red/50 transition-all duration-300 group hover-lift overflow-hidden">
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-brand-red/20 to-purple-600/20 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className={`${
                        battle.status === 'Live' ? 'bg-red-500 text-white' :
                        battle.status === 'Trending' ? 'bg-orange-500 text-white' :
                        'bg-purple-500 text-white'
                      }`}>
                        {battle.status}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {battle.duration}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3 border-purple-500 text-purple-400">
                      {battle.category}
                    </Badge>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-brand-red transition-colors">
                      {battle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {battle.description}
                    </p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm text-muted-foreground">
                        <span className="text-foreground font-medium">{battle.challenger}</span> vs{" "}
                        <span className="text-foreground font-medium">{battle.opponent}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {battle.views}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {battle.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Star className="w-3 h-3 text-yellow-400" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-gradient-primary">
                        <Play className="w-4 h-4 mr-2" />
                        Watch Battle
                      </Button>
                      <Button size="sm" variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
                        <Share className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Top Creators Tab */}
          <TabsContent value="creators" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {creators.map((creator, index) => (
                <Card key={index} className="bg-elevation-2 border-border hover:border-purple-500/50 transition-all duration-300 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={`/creator-${index + 1}.jpg`} />
                        <AvatarFallback className="bg-brand-red text-white text-lg">{creator.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground">{creator.name}</h3>
                        <p className="text-purple-400">{creator.handle}</p>
                        <Badge variant="outline" className="border-brand-red text-brand-red">
                          {creator.rank}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Followers</div>
                        <div className="text-foreground font-medium">{creator.followers}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Win Rate</div>
                        <div className="text-green-400 font-medium">{creator.winRate}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Earnings</div>
                        <div className="text-foreground font-medium">{creator.totalEarnings}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Specialty</div>
                        <div className="text-foreground font-medium text-xs">{creator.specialization}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Latest Content</div>
                        <p className="text-sm text-foreground">{creator.recentVideo}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                          <Users className="w-4 h-4 mr-2" />
                          Follow
                        </Button>
                        <Button size="sm" variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
                          <Video className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Learn & Grow Tab */}
          <TabsContent value="learn" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {educationalContent.map((content, index) => (
                <Card key={index} className="bg-elevation-2 border-border hover:border-green-500/50 transition-all duration-300 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                        <content.icon className="w-6 h-6 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="border-green-500 text-green-400 mb-2">
                          {content.type}
                        </Badge>
                        <h3 className="text-lg font-bold text-foreground">{content.title}</h3>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Duration</div>
                        <div className="text-foreground font-medium">{content.duration}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Level</div>
                        <div className="text-foreground font-medium">{content.level}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Students</div>
                        <div className="text-foreground font-medium">{content.students}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Rating</div>
                        <div className="text-yellow-400 font-medium flex items-center gap-1">
                          <Star className="w-4 h-4 fill-current" />
                          {content.rating}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm text-muted-foreground mb-1">Instructor</div>
                      <p className="text-foreground font-medium">{content.instructor}</p>
                    </div>
                    
                    <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Latest News Tab */}
          <TabsContent value="news" className="space-y-6">
            {latestNews.map((article, index) => (
              <Card key={index} className="bg-elevation-2 border-border hover:border-blue-500/50 transition-all duration-300 hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="border-blue-500 text-blue-400">
                        {article.category}
                      </Badge>
                      {article.trending && (
                        <Badge variant="secondary" className="bg-orange-500 text-white">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 hover:text-brand-red transition-colors cursor-pointer">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <Button size="sm" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                      Read Full Article
                    </Button>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-foreground">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-foreground">
                        <Share className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-foreground">
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ContentHub;