import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gray-100 font-sans">
      <Head>
        <title>vAIflow - Your Personal AI Brain</title>
        <meta name="description" content="vAIflow - Your personal AI brain to turn ideas into reality. Start for free today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold">vAIflow</h1>
          <p className="text-xl mt-2">Your Mind, Amplified. Ideas to Action in Seconds.</p>
          <a href="#signup" className="mt-4 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
            Get Started for Free
          </a>
        </div>
      </header>
      <section className="py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Turn Your Ideas into Reality</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Type your goal, and vAIflow creates, organizes, and automates everything for you.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Create</h3>
              <p>From courses to businesses, vAIflow builds your ideas instantly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Organize</h3>
              <p>Sync with Notion, Google Docs, and more to keep everything in one place.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Automate</h3>
              <p>Let vAIflow handle tasks, emails, and workflows for you.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="signup" className="bg-gray-200 py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Start Now, No Credit Card Required</h2>
          <form id="signup-form" className="flex justify-center gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg w-64 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
              aria-label="Email address for signup"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Sign Up Free
            </button>
          </form>
        </div>
      </section>
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>&copy; 2025 vAIflow. All rights reserved.</p>
      </footer>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.getElementById('signup-form').addEventListener('submit', (e) => {
              e.preventDefault();
              alert('Thank you for your interest! Signup is coming soon.');
            });
          `,
        }}
      />
    </div>
  );
}
