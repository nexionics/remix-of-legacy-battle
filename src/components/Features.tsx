import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Gamepad2, Server, CreditCard, Database, FileText } from "lucide-react";

const subsidiaries = [
  {
    icon: FileText,
    title: "Legacy IP, Inc.",
    jurisdiction: "Nevada",
    description: "Intellectual property ownership and licensing. Manages all proprietary technology assets and licensing agreements."
  },
  {
    icon: Gamepad2,
    title: "Legacy Battle Ops, LLC",
    jurisdiction: "Nevada",
    description: "Customer-facing application development. Direct user engagement platform for gaming and prediction markets."
  },
  {
    icon: Server,
    title: "Nexionics Services LLC",
    jurisdiction: "Delaware → California",
    description: "Technical services and infrastructure. Provides development, hosting, and operational support services."
  },
  {
    icon: CreditCard,
    title: "L.E.N.D. Payments LLC",
    jurisdiction: "Delaware/Nevada",
    description: "Payment processing and settlement. Handles all financial transactions and regulatory compliance."
  },
  {
    icon: Database,
    title: "L.E.N.D. Data LLC",
    jurisdiction: "Delaware",
    description: "Data privacy and PII management. Manages data processing agreements and user privacy compliance."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Corporate <span className="text-accent">Structure</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Strategic subsidiary organization designed for operational efficiency and regulatory compliance
          </p>
        </div>
        
        {/* Parent Company */}
        <div className="mb-12">
          <Card className="max-w-2xl mx-auto bg-gradient-primary border-primary/50 shadow-glow">
            <CardHeader className="text-center">
              <div className="mx-auto w-20 h-20 bg-background/20 rounded-full flex items-center justify-center mb-4">
                <Building2 className="h-10 w-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-primary-foreground">
                L.E.N.D. Holdings, Inc.
              </CardTitle>
              <p className="text-primary-foreground/80">Delaware Corporation • Parent Company</p>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-primary-foreground/90 leading-relaxed">
                Strategic holding company providing oversight, capital allocation, and governance 
                across all subsidiary operations and investments.
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Subsidiaries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subsidiaries.map((subsidiary, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <subsidiary.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg group-hover:text-accent transition-colors">
                  {subsidiary.title}
                </CardTitle>
                <p className="text-sm text-accent font-medium">{subsidiary.jurisdiction}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed text-sm">
                  {subsidiary.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;