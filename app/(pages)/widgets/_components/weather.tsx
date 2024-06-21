import {  CloudFog, MapPin } from "lucide-react";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"



const Weather = () => {
    return <div className="w-full bg-sky-200 rounded-3xl p-4 shadow-md">
        <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">Weather</h3>
          <p className="text-sm text-neutral-400">Fri, April 04</p>
        </div>
        <div className="flex gap-1">
          <MapPin />
          <p className=" font-medium">Sochi</p>
        </div>
      </div>
      <div className="w-full flex items-end justify-between pt-4">
      <div className="flex gap-1">
          <CloudFog />
          <p className=" font-medium">Cloudless</p>
        </div>
        <h2 className="text-6xl font-semibold">16°</h2>
      </div>
      <div className="pt-4">
      <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-2 h-12 rounded-lg bg-slate-400/20">
        <TabsTrigger className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-lg" value="account">Automatic</TabsTrigger>
        <TabsTrigger className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-lg" value="password">Swing</TabsTrigger>
      </TabsList>
      </Tabs>
      </div>
     
    </div>
}

export default Weather;