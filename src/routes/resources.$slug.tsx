import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CTAButton } from "@/components/CTAButton";
import { posts } from "./resources";
import { ArrowLeft, Calendar } from "lucide-react";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.title ?? "Resource"} | SCIFINITY` },
      { name: "description", content: loaderData?.post.excerpt ?? "" },
      { property: "og:title", content: loaderData?.post.title ?? "" },
      { property: "og:description", content: loaderData?.post.excerpt ?? "" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `/resources/${loaderData?.post.slug}` }],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-2xl px-4 py-32 text-center">
        <h1 className="font-display text-3xl text-navy font-bold">Resource not found</h1>
        <p className="mt-3 text-muted-foreground">The article you're looking for has moved or doesn't exist.</p>
        <Link to="/resources" className="mt-6 inline-block text-gold font-semibold">← Back to The Vault</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout><div className="mx-auto max-w-2xl px-4 py-32 text-center"><p>{error.message}</p></div></SiteLayout>
  ),
  component: ResourcePost,
});

function ResourcePost() {
  const { post } = Route.useLoaderData();
  return (
    <SiteLayout>
      <article className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link to="/resources" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-navy mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to The Vault
          </Link>
          <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-navy bg-gold/20 px-3 py-1 rounded-full">{post.category}</span>
          <h1 className="mt-4 font-display text-3xl lg:text-5xl font-bold text-navy text-balance leading-tight">{post.title}</h1>
          <div className="mt-4 text-sm text-muted-foreground inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {post.date}</div>

          <div className="mt-10 prose prose-lg max-w-none text-foreground/85 leading-relaxed space-y-5">
            <p className="text-xl text-foreground/90 font-medium">{post.excerpt}</p>
            <p>
              This article will be published soon as part of SCIFINITY's open resource library. Our mission is to give every ambitious student a clearer, faster, more logical path through the syllabus.
            </p>
            <p>
              While the full guide is being prepared, take a moment to explore our programs, the Golden Seat scholarship, and our success stories. The clearest version of you starts with the clearest version of your system.
            </p>
          </div>

          <div className="mt-12 rounded-2xl bg-navy text-white p-8 text-center">
            <p className="font-display text-xl">Ready to apply this in a structured system?</p>
            <div className="mt-5"><CTAButton to="/admission" variant="gold">Get Admission Now</CTAButton></div>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
