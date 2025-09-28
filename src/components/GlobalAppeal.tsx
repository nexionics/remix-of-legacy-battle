import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Globe, 
  MapPin, 
  Users, 
  Trophy, 
  Clock,
  DollarSign,
  Languages,
  Wifi,
  Star,
  Flag
} from "lucide-react";

const GlobalApeal = () => {
  const [selectedRegion, setSelectedRegion] = useState("global");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const globalStats = {
    global: {
      players: "127K+",
      countries: "85",
      languages: "12",
      battles: "2.3M+"
    },
    americas: {
      players: "45K+", 
      countries: "23",
      languages: "4",
      battles: "890K+"
    },
    europe: {
      players: "38K+",
      countries: "31", 
      languages: "8",
      battles: "756K+"
    },
    asia: {
      players: "44K+",
      countries: "31",
      languages: "6", 
      battles: "654K+"
    }
  };

  const supportedRegions = [
    {
      id: "americas",
      name: "Americas",
      flag: "🌎",
      timezone: "EST/PST",
      currency: "USD, CAD, BRL",
      peak: "8PM-12AM EST",
      featured: ["🇺🇸 United States", "🇨🇦 Canada", "🇧🇷 Brazil", "🇲🇽 Mexico"]
    },
    {
      id: "europe", 
      name: "Europe",
      flag: "🇪🇺",
      timezone: "CET/GMT",
      currency: "EUR, GBP, CHF",
      peak: "7PM-11PM CET",
      featured: ["🇬🇧 United Kingdom", "🇩🇪 Germany", "🇫🇷 France", "🇪🇸 Spain"]
    },
    {
      id: "asia",
      name: "Asia Pacific",
      flag: "🌏", 
      timezone: "JST/KST/AEST",
      currency: "JPY, KRW, AUD",
      peak: "8PM-12AM JST",
      featured: ["🇯🇵 Japan", "🇰🇷 South Korea", "🇦🇺 Australia", "🇸🇬 Singapore"]
    }
  ];

  const languages = [
    { code: "en", name: "English", native: "English", flag: "🇺🇸", speakers: "1.5B+" },
    { code: "es", name: "Spanish", native: "Español", flag: "🇪🇸", speakers: "500M+" },
    { code: "pt", name: "Portuguese", native: "Português", flag: "🇧🇷", speakers: "260M+" },
    { code: "fr", name: "French", native: "Français", flag: "🇫🇷", speakers: "280M+" },
    { code: "de", name: "German", native: "Deutsch", flag: "🇩🇪", speakers: "100M+" },
    { code: "ja", name: "Japanese", native: "日本語", flag: "🇯🇵", speakers: "125M+" },
    { code: "ko", name: "Korean", native: "한국어", flag: "🇰🇷", speakers: "77M+" },
    { code: "zh", name: "Chinese", native: "中文", flag: "🇨🇳", speakers: "1.1B+" }
  ];

  const localFeatures = [
    {
      icon: DollarSign,
      title: "Local Currency Support",
      description: "Battle Coins available in 15+ local currencies with real-time exchange rates",
      regions: "Global"
    },
    {
      icon: Clock,
      title: "Regional Tournament Times", 
      description: "Tournaments scheduled for optimal participation in each time zone",
      regions: "Americas, Europe, Asia"
    },
    {
      icon: Languages,
      title: "Multilingual Support",
      description: "Platform available in 12 languages with native speaker support",
      regions: "Global"
    },
    {
      icon: Wifi,
      title: "CDN Optimization",
      description: "Lightning-fast performance with servers in 25+ countries",
      regions: "Global"
    }
  ];

  const currentStats = globalStats[selectedRegion as keyof typeof globalStats];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-elevation-1">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-blue-500 text-blue-400">
            <Globe className="w-4 h-4 mr-2" />
            Global Community
          </Badge>
          <h2 className="text-heading-lg mb-4">Battle Across Continents</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Join challengers from around the world. Compete in your language, currency, and time zone 
            with optimized performance and local support.
          </p>
        </div>

        {/* Region Selector */}
        <div className="flex justify-center mb-12">
          <Select value={selectedRegion} onValueChange={setSelectedRegion}>
            <SelectTrigger className="w-64 bg-elevation-2 border-border">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent className="bg-elevation-2 border-border">
              <SelectItem value="global">🌍 Global Statistics</SelectItem>
              <SelectItem value="americas">🌎 Americas</SelectItem>
              <SelectItem value="europe">🇪🇺 Europe</SelectItem>
              <SelectItem value="asia">🌏 Asia Pacific</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Global Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <Card className="bg-elevation-2 border-border text-center hover-glow">
            <CardContent className="p-6">
              <Users className="w-8 h-8 text-brand-red mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">{currentStats.players}</div>
              <div className="text-sm text-muted-foreground">Active Players</div>
            </CardContent>
          </Card>
          
          <Card className="bg-elevation-2 border-border text-center hover-glow">
            <CardContent className="p-6">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">{currentStats.countries}</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </CardContent>
          </Card>
          
          <Card className="bg-elevation-2 border-border text-center hover-glow">
            <CardContent className="p-6">
              <Languages className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">{currentStats.languages}</div>
              <div className="text-sm text-muted-foreground">Languages</div>
            </CardContent>
          </Card>
          
          <Card className="bg-elevation-2 border-border text-center hover-glow">
            <CardContent className="p-6">
              <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">{currentStats.battles}</div>
              <div className="text-sm text-muted-foreground">Total Battles</div>
            </CardContent>
          </Card>
        </div>

        {/* Regional Information */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {supportedRegions.map((region, index) => (
            <Card 
              key={index} 
              className={`bg-elevation-2 border-border hover:border-blue-500/50 transition-all duration-300 hover-lift ${
                selectedRegion === region.id ? 'border-brand-red ring-1 ring-brand-red/20' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-4xl">{region.flag}</div>
                  <Badge variant="outline" className="border-blue-500 text-blue-400">
                    Active Now
                  </Badge>
                </div>
                <CardTitle className="text-foreground">{region.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Peak Hours:</span>
                    <span className="text-foreground">{region.peak}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Timezone:</span>
                    <span className="text-foreground">{region.timezone}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Currency:</span>
                    <span className="text-foreground">{region.currency}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Featured Countries:</h4>
                  <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                    {region.featured.map((country, i) => (
                      <div key={i}>{country}</div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Language Support */}
        <div className="text-center mb-12">
          <h3 className="text-heading-md mb-4">Speak Your Language</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Battle in your native language with full localization and native speaker support teams.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-20">
          {languages.map((lang, index) => (
            <Card 
              key={index}
              className={`bg-elevation-2 border-border hover:border-blue-500/50 transition-all duration-300 text-center cursor-pointer hover-lift ${
                selectedLanguage === lang.code ? 'border-brand-red ring-1 ring-brand-red/20' : ''
              }`}
              onClick={() => setSelectedLanguage(lang.code)}
            >
              <CardContent className="p-4">
                <div className="text-2xl mb-2">{lang.flag}</div>
                <h4 className="font-semibold text-foreground text-sm mb-1">{lang.native}</h4>
                <p className="text-xs text-muted-foreground mb-1">{lang.name}</p>
                <div className="text-xs text-brand-red">{lang.speakers}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Localization Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {localFeatures.map((feature, index) => (
            <Card key={index} className="bg-elevation-2 border-border hover:border-blue-500/30 transition-all duration-300 text-center hover-lift">
              <CardContent className="p-6">
                <feature.icon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                <Badge variant="outline" className="border-blue-500 text-blue-400 text-xs">
                  {feature.regions}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Global CTA */}
        <Card className="bg-gradient-to-r from-blue-500/10 via-transparent to-brand-red/10 border-blue-500/20">
          <CardContent className="p-8 text-center">
            <Globe className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-heading-md mb-4">Ready to Join the Global Arena?</h3>
            <p className="text-muted-foreground text-lg mb-6 max-w-3xl mx-auto">
              Connect with challengers worldwide. Choose your language, select your currency, 
              and start competing in tournaments optimized for your region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white shadow-glow">
                <Flag className="w-5 h-5 mr-2" />
                Join Global Tournament
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
              >
                <Languages className="w-5 h-5 mr-2" />
                Choose Language
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GlobalApeal;