import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  BriefcaseIcon,
  FlowerIcon,
  HeartIcon,
  LightbulbIcon,
  MountainSnow,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckIcon, MinusIcon } from "lucide-react";

interface PlanFeature {
    type: string;
    features: {
      name: string;
      free: boolean;
      startup: boolean;
      team: boolean;
      enterprise: boolean;
    }[];
  }
  
  const planFeatures: PlanFeature[] = [
    {
      type: "Financial data",
      features: [
        {
          name: "Open/High/Low/Close",
          free: true,
          startup: true,
          team: true,
          enterprise: true,
        },
        {
          name: "Price-volume difference indicator	",
          free: true,
          startup: true,
          team: true,
          enterprise: true,
        },
      ],
    },
    {
      type: "On-chain data",
      features: [
        {
          name: "Network growth",
          free: true,
          startup: false,
          team: true,
          enterprise: true,
        },
        {
          name: "Average token age consumed",
          free: true,
          startup: false,
          team: true,
          enterprise: true,
        },
        {
          name: "Exchange flow",
          free: false,
          startup: false,
          team: true,
          enterprise: true,
        },
        {
          name: "Total ERC20 exchange funds flow",
          free: false,
          startup: false,
          team: true,
          enterprise: true,
        },
      ],
    },
    {
      type: "Social data",
      features: [
        {
          name: "Dev activity",
          free: false,
          startup: true,
          team: false,
          enterprise: true,
        },
        {
          name: "Topic search",
          free: true,
          startup: true,
          team: true,
          enterprise: true,
        },
        {
          name: "Relative social dominance",
          free: true,
          startup: true,
          team: false,
          enterprise: true,
        },
      ],
    },
  ];
  

function HeroFormCenterAlignedSearchWithTags() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="container py-24 lg:py-32">
          <div className="text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Insights
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              Stay in the know with insights from industry experts.
            </p>
            <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
              {/* Form */}
              <form>
                <div className="relative z-10 flex space-x-3 p-3 border bg-background rounded-lg shadow-lg">
                  <div className="flex-[1_0_0%]">
                    <Label htmlFor="article" className="sr-only">
                      Search article
                    </Label>
                    <Input
                      name="article"
                      className="h-full"
                      id="article"
                      placeholder="Search article"
                    />
                  </div>
                  <div className="flex-[0_0_auto]">
                    <Button size={"icon"}>
                      <SearchIcon />
                    </Button>
                  </div>
                </div>
              </form>
              {/* End Form */}
              {/* SVG Element */}
              <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                <svg
                  className="w-16 h-auto text-orange-500"
                  width={121}
                  height={135}
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* End SVG Element */}
              {/* SVG Element */}
              <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                <svg
                  className="w-40 h-auto text-cyan-500"
                  width={347}
                  height={188}
                  viewBox="0 0 347 188"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                    stroke="currentColor"
                    strokeWidth={7}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* End SVG Element */}
            </div>
            <div className="mt-10 sm:mt-20 flex flex-wrap gap-2 justify-center">
              <Button variant={"outline"}>
                <BriefcaseIcon className="flex-shrink-0 w-3 h-auto mr-2" />
                Business
              </Button>
              <Button variant={"outline"}>
                <SettingsIcon className="flex-shrink-0 w-3 h-auto mr-2" />
                Strategy
              </Button>
              <Button variant={"outline"}>
                <HeartIcon className="flex-shrink-0 w-3 h-auto mr-2" />
                Health
              </Button>
              <Button variant={"outline"}>
                <LightbulbIcon className="flex-shrink-0 w-3 h-auto mr-2" />
                Creative
              </Button>
              <Button variant={"outline"}>
                <FlowerIcon className="flex-shrink-0 w-3 h-auto mr-2" />
                Environment
              </Button>
              <Button variant={"outline"}>
                <MountainSnow className="flex-shrink-0 w-3 h-auto mr-2" />
                Adventure
              </Button>
            </div>
          </div>
          {/* Title */}
        <div className="pt-48 max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Pricing
          </h2>
          <p className="mt-1 text-muted-foreground">
            Whatever your status, our offers evolve according to your needs.
          </p>
        </div>
        {/* End Title */}
        {/* Switch */}
        <div className="flex justify-center items-center">
          <Label htmlFor="payment-schedule" className="me-3">
            Monthly
          </Label>
          <Switch id="payment-schedule" />
          <Label htmlFor="payment-schedule" className="relative ms-3">
            Annual
            <span className="absolute -top-10 start-auto -end-28">
              <span className="flex items-center">
                <svg
                  className="w-14 h-8 -me-6"
                  width={45}
                  height={25}
                  viewBox="0 0 45 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
                    fill="currentColor"
                    className="text-muted-foreground"
                  />
                </svg>
                <Badge className="mt-3 uppercase">Save up to 10%</Badge>
              </span>
            </span>
          </Label>
        </div>
        {/* End Switch */}
        {/* Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">
          {/* Card */}
          <Card>
            <CardHeader className="text-center pb-2">
              <CardTitle className="mb-7">Free</CardTitle>
              <span className="font-bold text-5xl">Free</span>
            </CardHeader>
            <CardDescription className="text-center">
              Forever free
            </CardDescription>
            <CardContent>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">1 user</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Plan features</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Product support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={"outline"}>
                Sign up
              </Button>
            </CardFooter>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card className="border-primary">
            <CardHeader className="text-center pb-2">
              <Badge className="uppercase w-max self-center mb-3">
                Most popular
              </Badge>
              <CardTitle className="!mb-7">Startup</CardTitle>
              <span className="font-bold text-5xl">£39</span>
            </CardHeader>
            <CardDescription className="text-center w-11/12 mx-auto">
              All the basics for starting a new business
            </CardDescription>
            <CardContent>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">2 user</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Plan features</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Product support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Sign up</Button>
            </CardFooter>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card>
            <CardHeader className="text-center pb-2">
              <CardTitle className="mb-7">Team</CardTitle>
              <span className="font-bold text-5xl">£89</span>
            </CardHeader>
            <CardDescription className="text-center  w-11/12 mx-auto">
              Everything you need for a growing business
            </CardDescription>
            <CardContent>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">5 user</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Plan features</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Product support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={"outline"}>
                Sign up
              </Button>
            </CardFooter>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card>
            <CardHeader className="text-center pb-2">
              <CardTitle className="mb-7">Enterprise</CardTitle>
              <span className="font-bold text-5xl">149</span>
            </CardHeader>
            <CardDescription className="text-center  w-11/12 mx-auto">
              Advanced features for scaling your business
            </CardDescription>
            <CardContent>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">10 user</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Plan features</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Product support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={"outline"}>
                Sign up
              </Button>
            </CardFooter>
          </Card>
          {/* End Card */}
        </div>
        {/* End Grid */}
        {/* Comparison table */}
        <div className="mt-20 lg:mt-32">
          <div className="lg:text-center mb-10 lg:mb-20">
            <h3 className="text-2xl font-semibold dark:text-white">
              Compare plans
            </h3>
          </div>
          {/* xs to lg */}
          <Table className="hidden lg:table">
            <TableHeader>
              <TableRow className="bg-muted hover:bg-muted">
                <TableHead className="w-3/12 text-primary">Plans</TableHead>
                <TableHead className="w-2/12 text-primary text-lg font-medium text-center">
                  Free
                </TableHead>
                <TableHead className="w-2/12 text-primary text-lg font-medium text-center">
                  Startup
                </TableHead>
                <TableHead className="w-2/12 text-primary text-lg font-medium text-center">
                  Team
                </TableHead>
                <TableHead className="w-2/12 text-primary text-lg font-medium text-center">
                  Enterprise
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {planFeatures.map((featureType) => (
                <>
                  <TableRow className="bg-muted/50" key={featureType.type}>
                    <TableCell colSpan={5} className="font-bold">
                      {featureType.type}
                    </TableCell>
                  </TableRow>
                  {featureType.features.map((feature) => (
                    <TableRow
                      key={feature.name}
                      className="text-muted-foreground"
                    >
                      <TableCell>{feature.name}</TableCell>
                      <TableCell>
                        <div className="mx-auto w-min">
                          {feature.free ? (
                            <CheckIcon className="h-5 w-5" />
                          ) : (
                            <MinusIcon className="h-5 w-5" />
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="mx-auto w-min">
                          {feature.startup ? (
                            <CheckIcon className="h-5 w-5" />
                          ) : (
                            <MinusIcon className="h-5 w-5" />
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="mx-auto w-min">
                          {feature.team ? (
                            <CheckIcon className="h-5 w-5" />
                          ) : (
                            <MinusIcon className="h-5 w-5" />
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="mx-auto w-min">
                          {feature.enterprise ? (
                            <CheckIcon className="h-5 w-5" />
                          ) : (
                            <MinusIcon className="h-5 w-5" />
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              ))}
            </TableBody>
          </Table>

          <div className="space-y-24 lg:hidden">
            <section>
              <div className="mb-4">
                <h4 className="text-xl font-medium">Free</h4>
              </div>
              <Table>
                {planFeatures.map((featureType) => (
                  <>
                    <TableRow
                      key={featureType.type}
                      className="bg-muted hover:bg-muted"
                    >
                      <TableCell
                        colSpan={2}
                        className="w-10/12 text-primary font-bold"
                      >
                        {featureType.type}
                      </TableCell>
                    </TableRow>
                    {featureType.features.map((feature) => (
                      <TableRow
                        className="text-muted-foreground"
                        key={feature.name}
                      >
                        <TableCell className="w-11/12">
                          {feature.name}
                        </TableCell>
                        <TableCell className="text-right">
                          {feature.enterprise ? (
                            <CheckIcon className="h-5 w-5" />
                          ) : (
                            <MinusIcon className="h-5 w-5" />
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                ))}
              </Table>
            </section>
            <section>
              <div className="mb-4">
                <h4 className="text-xl font-medium">Startup</h4>
              </div>
              <Table>
                {planFeatures.map((featureType) => (
                  <>
                    <TableRow
                      key={featureType.type}
                      className="bg-muted hover:bg-muted"
                    >
                      <TableCell
                        colSpan={2}
                        className="w-10/12 text-primary font-bold"
                      >
                        {featureType.type}
                      </TableCell>
                    </TableRow>
                    {featureType.features.map((feature) => (
                      <TableRow
                        className="text-muted-foreground"
                        key={feature.name}
                      >
                        <TableCell className="w-11/12">
                          {feature.name}
                        </TableCell>
                        <TableCell className="text-right">
                          {feature.startup ? (
                            <CheckIcon className="h-5 w-5" />
                          ) : (
                            <MinusIcon className="h-5 w-5" />
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                ))}
              </Table>
            </section>
            <section>
              <div className="mb-4">
                <h4 className="text-xl font-medium">Team</h4>
              </div>
              <Table>
                {planFeatures.map((featureType) => (
                  <>
                    <TableRow
                      key={featureType.type}
                      className="bg-muted hover:bg-muted"
                    >
                      <TableCell
                        colSpan={2}
                        className="w-10/12 text-primary font-bold"
                      >
                        {featureType.type}
                      </TableCell>
                    </TableRow>
                    {featureType.features.map((feature) => (
                      <TableRow
                        className="text-muted-foreground"
                        key={feature.name}
                      >
                        <TableCell className="w-11/12">
                          {feature.name}
                        </TableCell>
                        <TableCell className="text-right">
                          {feature.team ? (
                            <CheckIcon className="h-5 w-5" />
                          ) : (
                            <MinusIcon className="h-5 w-5" />
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                ))}
              </Table>
            </section>
            <section>
              <div className="mb-4">
                <h4 className="text-xl font-medium">Enterprise</h4>
              </div>
              <Table>
                {planFeatures.map((featureType) => (
                  <>
                    <TableRow
                      key={featureType.type}
                      className="bg-muted hover:bg-muted"
                    >
                      <TableCell
                        colSpan={2}
                        className="w-10/12 text-primary font-bold"
                      >
                        {featureType.type}
                      </TableCell>
                    </TableRow>
                    {featureType.features.map((feature) => (
                      <TableRow
                        className="text-muted-foreground"
                        key={feature.name}
                      >
                        <TableCell className="w-11/12">
                          {feature.name}
                        </TableCell>
                        <TableCell className="text-right">
                          {feature.enterprise ? (
                            <CheckIcon className="h-5 w-5" />
                          ) : (
                            <MinusIcon className="h-5 w-5" />
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                ))}
              </Table>
            </section>
          </div>
          {/* End xs to lg */}
        </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
export default HeroFormCenterAlignedSearchWithTags