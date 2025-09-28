import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Sword, 
  Shield, 
  Zap, 
  Trophy, 
  Timer,
  Coins,
  Users,
  Target
} from "lucide-react";

const InteractiveDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [playerHealth, setPlayerHealth] = useState(100);
  const [opponentHealth, setOpponentHealth] = useState(100);
  const [battleCoins, setBattleCoins] = useState(150);
  const [timeLeft, setTimeLeft] = useState(30);

  const battleSteps = [
    {
      title: "Challenge Issued",
      description: "Player Alex challenges Maria to a skill duel",
      action: "🎯 Code Challenge: Optimize Algorithm",
      playerAction: "Preparing solution...",
      opponentAction: "Accepting challenge..."
    },
    {
      title: "Battle Begins",
      description: "Both players are solving the challenge",
      action: "⚡ Real-time coding battle",
      playerAction: "Writing code...",
      opponentAction: "Debugging solution..."
    },
    {
      title: "First Strike",
      description: "Alex submits first working solution",
      action: "✅ Solution passed all tests",
      playerAction: "Critical hit!",
      opponentAction: "Under pressure..."
    },
    {
      title: "Counter Attack",
      description: "Maria optimizes and improves performance",
      action: "🚀 Performance boost: 40% faster",
      playerAction: "Taking damage...",
      opponentAction: "Counter strike!"
    },
    {
      title: "Victory",
      description: "Alex lands the final optimization",
      action: "🏆 Victory achieved!",
      playerAction: "Final optimization!",
      opponentAction: "Defeated"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && currentStep < battleSteps.length - 1) {
      interval = setInterval(() => {
        setCurrentStep(prev => prev + 1);
        
        // Simulate battle effects
        if (currentStep === 2) {
          setOpponentHealth(70);
          setBattleCoins(prev => prev + 25);
        } else if (currentStep === 3) {
          setPlayerHealth(80);
          setOpponentHealth(45);
        } else if (currentStep === 4) {
          setOpponentHealth(0);
          setBattleCoins(prev => prev + 100);
        }
        
        setTimeLeft(prev => Math.max(0, prev - 7));
        
        if (currentStep >= battleSteps.length - 1) {
          setIsPlaying(false);
        }
      }, 2000);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying, currentStep, battleSteps.length]);

  const resetDemo = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setPlayerHealth(100);
    setOpponentHealth(100);
    setBattleCoins(150);
    setTimeLeft(30);
  };

  const toggleDemo = () => {
    if (currentStep >= battleSteps.length - 1) {
      resetDemo();
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-elevation-1 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-brand-red text-brand-red">
            <Play className="w-4 h-4 mr-2" />
            Interactive Demo
          </Badge>
          <h2 className="text-heading-lg mb-4">Experience a Live Battle</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch how real-time skill challenges unfold. See the intensity, strategy, and rewards in action.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Battle Arena */}
          <Card className="bg-elevation-2 border-brand-red/20 mb-8 overflow-hidden">
            <CardContent className="p-0">
              {/* Battle Header */}
              <div className="bg-gradient-primary p-4 text-white">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Trophy className="w-6 h-6" />
                    <span className="font-bold">Skill Duel Arena</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Timer className="w-4 h-4" />
                      <span className="font-mono">{timeLeft}s</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coins className="w-4 h-4" />
                      <span className="font-mono">{battleCoins} BC</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Battle Players */}
              <div className="p-6 bg-elevation-1">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Player 1 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/avatar-alex.jpg" />
                        <AvatarFallback className="bg-brand-red text-white">AX</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-foreground">Alex Chen</h4>
                        <p className="text-sm text-muted-foreground">Legend Rank</p>
                      </div>
                      <div className="ml-auto">
                        <Badge variant="secondary" className="bg-brand-red/10 text-brand-red">
                          <Sword className="w-3 h-3 mr-1" />
                          Challenger
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Health</span>
                        <span>{playerHealth}%</span>
                      </div>
                      <Progress value={playerHealth} className="h-2" />
                    </div>
                    <div className="text-sm text-muted-foreground italic">
                      {battleSteps[currentStep]?.playerAction}
                    </div>
                  </div>

                  {/* VS Divider */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className="text-4xl font-bold text-brand-red animate-pulse">VS</div>
                  </div>

                  {/* Player 2 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/avatar-maria.jpg" />
                        <AvatarFallback className="bg-blue-500 text-white">MS</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-foreground">Maria Silva</h4>
                        <p className="text-sm text-muted-foreground">Champion Rank</p>
                      </div>
                      <div className="ml-auto">
                        <Badge variant="secondary" className="bg-blue-500/10 text-blue-400">
                          <Shield className="w-3 h-3 mr-1" />
                          Defender
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Health</span>
                        <span>{opponentHealth}%</span>
                      </div>
                      <Progress value={opponentHealth} className="h-2" />
                    </div>
                    <div className="text-sm text-muted-foreground italic">
                      {battleSteps[currentStep]?.opponentAction}
                    </div>
                  </div>
                </div>

                {/* Battle Status */}
                <Card className="bg-background border-brand-red/20">
                  <CardContent className="p-4">
                    <div className="text-center space-y-2">
                      <Badge variant="outline" className="border-brand-red text-brand-red">
                        {battleSteps[currentStep]?.title}
                      </Badge>
                      <h4 className="font-semibold text-foreground">
                        {battleSteps[currentStep]?.action}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {battleSteps[currentStep]?.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Demo Controls */}
          <div className="flex justify-center gap-4 mb-12">
            <Button 
              onClick={toggleDemo}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white shadow-glow"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-5 h-5 mr-2" />
                  Pause Demo
                </>
              ) : currentStep >= battleSteps.length - 1 ? (
                <>
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Restart Demo
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-2" />
                  {currentStep === 0 ? "Start Demo" : "Resume"}
                </>
              )}
            </Button>
            
            <Button 
              onClick={resetDemo}
              variant="outline"
              size="lg"
              className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Reset
            </Button>
          </div>

          {/* Demo Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-elevation-2 border-border hover:border-brand-red/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 text-brand-red mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Real-Time Action</h4>
                <p className="text-sm text-muted-foreground">
                  Experience live battles with instant feedback and dynamic scoring
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-elevation-2 border-border hover:border-brand-red/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-brand-red mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Skill-Based</h4>
                <p className="text-sm text-muted-foreground">
                  Pure skill determines victory - no luck, no pay-to-win mechanics
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-elevation-2 border-border hover:border-brand-red/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-brand-red mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Spectator Mode</h4>
                <p className="text-sm text-muted-foreground">
                  Watch and learn from top players in live battle spectator mode
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;