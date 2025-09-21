import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ArrowDown, Building2, FileText, Gamepad2, CreditCard, Users, Database } from "lucide-react";

const PromoVideo = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Operational <span className="text-accent">Structure</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Strategic flow of operations, intellectual property, and financial services across our subsidiary network
            </p>
          </div>
          
          {/* Corporate Structure Diagram */}
          <div className="relative">
            {/* Parent Company */}
            <div className="flex justify-center mb-8">
              <Card className="bg-gradient-primary border-primary/50 shadow-glow max-w-md">
                <CardHeader className="text-center pb-4">
                  <Building2 className="mx-auto h-8 w-8 text-primary-foreground mb-2" />
                  <CardTitle className="text-xl text-primary-foreground">L.E.N.D. Holdings, Inc.</CardTitle>
                  <p className="text-sm text-primary-foreground/80">(DE) • Parent / Board / Investors</p>
                </CardHeader>
              </Card>
            </div>
            
            {/* Connection Lines */}
            <div className="flex justify-center mb-8">
              <div className="w-px h-12 bg-border"></div>
            </div>
            
            {/* Subsidiaries Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Legacy IP */}
              <Card className="group hover:shadow-glow hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center pb-3">
                  <FileText className="mx-auto h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-sm">Legacy IP, Inc.</CardTitle>
                  <p className="text-xs text-muted-foreground">(NV • IP owner)</p>
                </CardHeader>
              </Card>
              
              {/* Legacy Battle Ops */}
              <Card className="group hover:shadow-glow hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center pb-3">
                  <Gamepad2 className="mx-auto h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-sm">Legacy Battle Ops, LLC</CardTitle>
                  <p className="text-xs text-muted-foreground">(NV • Customer app)</p>
                </CardHeader>
              </Card>
              
              {/* Nexionics Services */}
              <Card className="group hover:shadow-glow hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center pb-3">
                  <Building2 className="mx-auto h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-sm">Nexionics Services LLC</CardTitle>
                  <p className="text-xs text-muted-foreground">(DE→CA • Services)</p>
                </CardHeader>
              </Card>
              
              {/* L.E.N.D. Payments */}
              <Card className="group hover:shadow-glow hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center pb-3">
                  <CreditCard className="mx-auto h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-sm">L.E.N.D. Payments LLC</CardTitle>
                  <p className="text-xs text-muted-foreground">(DE/NV • Payments)</p>
                </CardHeader>
              </Card>
            </div>
            
            {/* Data Entity */}
            <div className="flex justify-center mb-8">
              <Card className="bg-secondary/20 border-accent/50 max-w-sm">
                <CardHeader className="text-center pb-4">
                  <Database className="mx-auto h-6 w-6 text-accent mb-2" />
                  <CardTitle className="text-sm">L.E.N.D. Data LLC</CardTitle>
                  <p className="text-xs text-muted-foreground">(DE • Privacy/PII)</p>
                </CardHeader>
              </Card>
            </div>
            
            {/* Operational Flows */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card/30 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="h-5 w-5 text-accent" />
                    <span className="font-semibold">IP Licensing</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Royalty-based licensing from Legacy IP to operating subsidiaries
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/30 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-semibold">User Transactions</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Customer interactions flow through Battle Ops to payment processing
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/30 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Database className="h-5 w-5 text-accent" />
                    <span className="font-semibold">Data Protection</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Privacy compliance and data processing agreements managed centrally
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoVideo;