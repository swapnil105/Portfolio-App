import { useEffect } from "react";

function App() {

  useEffect(() => {
    document.title = "Swapnil | DevOps Engineer";
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div className="relative text-white font-mono overflow-hidden">

      {/* DARK GALAXY BACKGROUND */}
  <div className="dark-galaxy-bg"></div>

      {/* 🌌 Animated Green Galaxy Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
  <div className="absolute w-[400px] h-[400px] bg-green-500 opacity-10 blur-3xl top-10 left-10 animate-pulse"></div>
  <div className="absolute w-[300px] h-[300px] bg-emerald-400 opacity-10 blur-3xl bottom-10 right-10 animate-pulse"></div>
</div>

      <div className="fixed inset-0 -z-10 pointer-events-none">
  <div className="absolute w-[400px] h-[400px] bg-green-500 opacity-10 blur-3xl top-10 left-10 animate-pulse"></div>
  <div className="absolute w-[300px] h-[300px] bg-emerald-400 opacity-10 blur-3xl bottom-10 right-10 animate-pulse"></div>
</div>

      {/* NAV */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-gray-800 flex justify-center gap-8 py-4 z-50">
        {["home","about","projects","skills","contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className="text-gray-400 hover:text-green-400 transition"
          >
            {item.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* HERO */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6 bg-black/40 backdrop-blur-sm">
        <p className="text-green-400 mb-4">$ whoami</p>

        <h1 className="text-6xl font-bold text-green-400">Swapnil</h1>

        <h2 className="mt-4 text-xl text-gray-300">
          DevOps • Cybersecurity • System Builder
        </h2>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => scrollTo("projects")}
            className="border border-green-400 px-6 py-2 rounded hover:bg-green-400 hover:text-black transition"
          >
            View Projects
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 bg-black/40 backdrop-blur-sm">
        <div className="max-w-4xl text-gray-400 space-y-4">
          <h2 className="text-3xl text-green-400 text-center">About</h2>

          <p>
            I prefer learning by building and testing systems rather than just studying concepts.
          </p>

          <p>
            My focus is on understanding real-world security — from logs and network traffic to authentication systems.
          </p>

          <p>
            I actively work on detection, monitoring, and system-level problem solving in security environments.
          </p>

          <p>
            I’m passionate about building practical projects that demonstrate my skills and learning in DevOps and cybersecurity.
          </p>

          <p>
            I’m always looking for new challenges and opportunities to grow as a security engineer.
          </p>

          <p>
            If you have a project or opportunity in mind, feel free to reach out!
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="min-h-screen px-6 py-20 bg-black/40 backdrop-blur-sm">
        <h2 className="text-3xl text-green-400 text-center mb-12">Projects</h2>

        <div className="max-w-4xl mx-auto space-y-8">

          {/* PROJECT 1 */}
          <div className="border border-gray-800 p-6 rounded transition duration-300 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]">
            <h3 className="text-xl">SIEM Threat Detection System</h3>

            <p className="text-gray-400 mt-2">
              Built an ELK-based log analysis pipeline to detect brute-force attacks from authentication logs.
            </p>

            <p className="mt-3 text-green-400">Architecture:</p>
            <p className="text-gray-400">
              Logs → Logstash → Elasticsearch → Kibana → Detection
            </p>

            <p className="mt-3 text-green-400">What I Learned:</p>
            <ul className="list-disc ml-5 text-gray-400">
              <li>How brute-force attacks appear in logs</li>
              <li>How SOC detection pipelines work</li>
              <li>Importance of monitoring & log analysis</li>
            </ul>

            <a
              href="https://github.com/swapnil105/siem-elk-threat-detection"
              target="_blank"
              className="inline-block mt-4 text-green-400 hover:underline"
            >
              GitHub →
            </a>
          </div>

          {/* PROJECT 2 */}
          <div className="border border-gray-800 p-6 rounded transition duration-300 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]">
            <h3 className="text-xl">Dockerized Portfolio Deployment</h3>

            <p className="text-gray-400 mt-2">
              Containerized React portfolio and deployed using Nginx.
            </p>

            <p className="mt-3 text-green-400">Architecture:</p>
            <p className="text-gray-400">
              Code → Build → Docker → Nginx → Deployment
            </p>

            <p className="mt-3 text-green-400">What I Learned:</p>
            <ul className="list-disc ml-5 text-gray-400">
              <li>Production vs development builds</li>
              <li>Container-based deployment</li>
              <li>CI/CD debugging mindset</li>
            </ul>

            <a
              href="https://github.com/swapnil105/Portfolio-App"
              target="_blank"
              className="inline-block mt-4 text-green-400 hover:underline"
            >
              GitHub →
            </a>
          </div>

          {/* PROJECT 3 */}
          <div className="border border-gray-800 p-6 rounded transition duration-300 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]">
            <h3 className="text-xl">Cybersecurity Lab</h3>

            <p className="text-gray-400 mt-2">
              Hands-on lab for network analysis, vulnerability scanning, and web security testing.
            </p>

            <p className="mt-3 text-green-400">Architecture:</p>
            <p className="text-gray-400">
              Kali Linux → Tools → Traffic Analysis → Exploitation
            </p>

            <p className="mt-3 text-green-400">What I Learned:</p>
            <ul className="list-disc ml-5 text-gray-400">
              <li>Packet inspection using Wireshark</li>
              <li>Vulnerability scanning using Nmap</li>
              <li>Web testing using Burp Suite</li>
            </ul>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="h-screen flex items-center justify-center px-6 bg-black/40 backdrop-blur-sm">
        <div className="text-center">
          <h2 className="text-3xl text-green-400 mb-8">Skills</h2>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Docker","Linux","Networking","ELK Stack",
              "Wireshark","Nmap","Burp Suite","React","CI/CD",
              "Node.js","Python","Git","Kubernetes",
              "AWS","Azure","GCP","Scripting","Monitoring","Security Analysis",
              "Postman", "Jenkins","Notion","Monitoring Tools","Authentication Systems","System Hardening"
            ].map((s) => (
              <span
                key={s}
                className="border border-gray-700 px-4 py-2 rounded transition duration-300 
                hover:border-green-400 hover:scale-110 
                hover:shadow-[0_0_15px_rgba(34,197,94,0.7)]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="h-screen flex items-center justify-center px-6 bg-black/40 backdrop-blur-sm">
        <div className="text-center space-y-3">
          <h2 className="text-3xl text-green-400">Contact</h2>
          <a 
  href="mailto:resoniteswapnil@gmail.com"
  className="block text-yellow-400 hover:underline"
>
  resoniteswapnil@gmail.com
</a>
          

          <a href="https://github.com/swapnil105" target="_blank" className="block text-gray-400 hover:text-white">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/swapnil-68164b180/" target="_blank" className="block text-blue-400 hover:underline">
            LinkedIn
          </a>

          <a href="https://www.reddit.com/user/shooterswapnil/" target="_blank" className="block text-red-400 hover:underline">
            Reddit
          </a>
        </div>
      </section>

    </div>
  );
}

export default App;