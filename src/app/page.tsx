/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBlogPosts, getJSONData } from "@/lib/serverUtils";
import Link from "next/link";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

export default async function Home() {
  const data = await getJSONData();
  const posts = await getBlogPosts();

  return (
    <main>
      {/* Banner Section */}
      <section
        id="home"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div >
            <Image
              src="/assets/logo.png"
              width={400}
              height={400}
              alt="Developer"
              className="mx-auto aspect-square overflow-hidden object-cover object-center rounded-full"
            />
          </div>
          <div className="w-full lg:w-2/3 space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter ">
                Global Web Solutions 🌍
              </h1>
            </div>
            <p className="max-w-[600px] lg:text-lg text-gray-500 dark:text-gray-400">
              {data.personalInfo.bio}
            </p>
            {/* <div className="space-x-4">
              <Link
                target="_blank"
                href={data.contactInfo.github}
                prefetch={false}
              >
                <Button variant="secondary" size="icon">
                  <GitHubLogoIcon className="h-4 w-4" />
                </Button>
              </Link>
              <Link
                target="_blank"
                href={data.contactInfo.twitter}
                prefetch={false}
              >
                <Button variant="secondary" size="icon">
                  <TwitterLogoIcon className="h-4 w-4" />
                </Button>
              </Link>

              <Link
                target="_blank"
                href={data.contactInfo.linkedin}
                prefetch={false}
              >
                <Button variant="secondary" size="icon">
                  <LinkedInLogoIcon className="h-4 w-4" />
                </Button>
              </Link>

              <Link href={`mailto:${data.contactInfo.email}`}>
                <Button variant="secondary" size="icon">
                  <EnvelopeClosedIcon className="h-4 w-4" />
                </Button>
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      {/* <section
        id="experience"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">
          Work Experience
        </h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
          {data.workExperience.map((exp) => (
            <div key={exp.id} className="grid gap-1 relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

              <h4 className="text-xl font-medium">
                {exp.role} @
                <Link
                  href={exp.companyWebsite}
                  target="_blank"
                  className="ml-2 text-primary"
                >
                  {exp.company}
                </Link>
              </h4>
              <div className="text-gray-500 dark:text-gray-400">
                {exp.startDate} - {exp.endDate}
              </div>
              <div className="mt-2">
                <h6 className="font-medium">Key Responsibilities:</h6>
                <ul className="text-gray-500 text-sm list-disc pl-4">
                  {exp.keyResponsibilities.map((resp) => (
                    <li key={resp}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Projects Section */}
      <section
        id="projects"
        className="container max-w-6xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12"> Projects</h2>
        <div className="grid grid-cols-1 gap-6 lg:gap-8">
          {data.projects.map((project) => (
            <Card
              key={project.title}
              className="group flex flex-col overflow-hidden border border-white/10 bg-slate-900/70 shadow-[0_50px_90px_-45px_rgba(15,23,42,0.85)] backdrop-blur lg:flex-row"
            >
              <div className="relative w-full overflow-hidden lg:w-1/2">
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-slate-950/80 via-transparent to-slate-900/30 opacity-70 transition duration-500 group-hover:opacity-40" />
                <Image
                  src={project.cover}
                  alt={`${project.title} cover`}
                  height={360}
                  width={640}
                  className="h-full w-full scale-100 rounded-none object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-4 z-20 rounded-2xl border border-white/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -bottom-10 left-1/2 z-0 h-52 w-52 -translate-x-1/2 transform rounded-full bg-fuchsia-500/40 blur-3xl opacity-0 transition duration-700 group-hover:opacity-80" />
              </div>

              <div className="flex w-full flex-col justify-between p-6 lg:w-1/2">
                <CardHeader className="space-y-4 p-0">
                  <CardTitle className="text-2xl font-semibold text-white lg:text-[2rem]">
                    {project.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="border border-white/10 bg-white/10 text-xs font-semibold uppercase tracking-wide text-white/90"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="px-0">
                  <CardDescription className="leading-relaxed text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="px-0">
                  <div className="flex flex-wrap gap-3">
                    {project?.live_url && (
                      <Link
                        target="_blank"
                        href={project.live_url}
                        prefetch={false}
                      >
                        <Button className="gap-2" size="sm">
                          <GlobeIcon className="h-4 w-4" />
                          Live Demo
                        </Button>
                      </Link>
                    )}
                    {project?.code_repo_url && (
                      <Link
                        target="_blank"
                        href={project.code_repo_url}
                        prefetch={false}
                      >
                        <Button className="gap-2" size="sm" variant="outline">
                          <GitHubLogoIcon className="h-4 w-4" />
                          Repository
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      {/* <section
        id="education"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">Education</h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
          {data.education.map((ed) => (
            <div key={ed.id} className="grid gap-1 relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

              <h4 className="text-xl font-medium">{ed.degree}</h4>
              <h5 className="font-medium">{ed.institution}</h5>
              <div className="text-gray-500 dark:text-gray-400">
                {ed.startDate} - {ed.endDate}
              </div>
              <p className="mt-2 text-sm text-gray-500">{ed.description}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section
        id="testimonials"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">Testimonials</h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {data.testimonials.map((t) => (
            <Card className="p-6 text-left" key={t.id}>
              <blockquote className="font-medium lg:text-og">
                &ldquo;{t.feedback}.&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <Avatar>
                  <Image
                    height={50}
                    width={50}
                    alt="testimonial avatar"
                    src={t.avatar}
                  />
                </Avatar>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {t.title} @ <Link href={t.link}>
                      {t.company}
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section> */}

      {/* Blogs Section */}
      <section
        id="blogs"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">Blogs</h2>

        <div className="flex flex-col space-y-8">
          {posts.map((post) => (
            <Link key={post.slug} href={post.link}>
              <h3 className="text-xl md:text-3xl font-semibold">
                {post.title}
              </h3>
              <p className="md:text-lg font-light">{post.description}</p>
              <p className="text-sm font-medium text-gray-500 mt-2">
                Published at: {post.publishDate}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
