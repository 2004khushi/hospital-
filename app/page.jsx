import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"


export default function Home() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden py-32">
        <div className=" mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="default |outline | secondary | destructive" className="bg-teal-700 border-teal-500 px-4 py-2 gradient-text"> 
                Healthcare made simple 
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Connect with <br />doctors <br />
               <span className="gradient-text">
                Anytime Anywhere!
               </span>
              </h1>
               <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                Book appointments, consult via video, and manage your healthcare
                journey all in one secure platform.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
}
