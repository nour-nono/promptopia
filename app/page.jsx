import Feed from "../components/Feed";
export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Dicsover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          AI-generated prompts
        </span>
      </h1>
      <p className="desc text-center">
        Promptopia is an AI-powered platform that generates writing prompts for
        writers, authors, and bloggers. Our AI generates unique and creative
        writing prompts that will help you overcome writer's block and inspire
        you to write more.
      </p>
      <Feed />
    </section>
  );
}
