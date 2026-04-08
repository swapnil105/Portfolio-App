# 🚀 DevOps & Security Portfolio – Swapnil

A system-focused portfolio showcasing real-world learning through building, testing, and analyzing security-driven systems.

🌐 **Live Portfolio:**  
https://portfolio-green-seven-34.vercel.app/

---

## 🧠 About Me

I prefer learning by building and testing systems rather than just studying concepts.

My focus is on understanding how real-world security works — from logs and network traffic to authentication systems and cloud environments.

I recently built a SIEM-based log analysis setup using the ELK Stack, where I analyzed authentication logs and identified brute-force attack patterns by tracking repeated failed login attempts from a single IP. This helped me understand how monitoring and detection actually works in a SOC environment.

Alongside this, I have worked on:
- Network traffic analysis using Wireshark  
- Vulnerability assessment using Nmap and Metasploit  
- Web security testing based on OWASP Top 10 using Burp Suite  

I have also explored cloud and network security concepts through programs from Palo Alto Networks, Deloitte, and Siemens.

On the development side, I build backend logic and secure web systems, focusing on:
- Authentication flows  
- Input validation  
- Attack detection logic  
- Automation workflows  

---

## 🔥 Featured Projects

### 🛡️ SIEM Threat Detection System (ELK Stack)

**Overview:**  
Built a log analysis pipeline to detect suspicious authentication behavior.

**Architecture Flow:**  
Logs → Logstash → Elasticsearch → Kibana → Detection

**Key Work:**
- Analyzed authentication logs  
- Identified brute-force attack patterns  
- Tracked repeated failed login attempts from a single IP  

**What I Learned:**
- How real-world logs expose attack behavior  
- Basics of detection pipelines in SOC environments  
- Importance of log normalization and monitoring  


---

### 🌐 Dockerized Portfolio Deployment

**Overview:**  
Containerized React-based portfolio and deployed using Nginx.

**Architecture Flow:**  
Code → Build → Docker → Nginx → Deployment

**Key Work:**
- Built production-ready Docker image  
- Configured Nginx for serving static files  
- Deployed on Vercel  

**What I Learned:**
- Difference between dev and production builds  
- Container-based deployment workflows  
- CI/CD debugging and environment issues  

🔗 https://github.com/swapnil105/Portfolio-App

---

### 🔐 Cybersecurity Lab

**Overview:**  
Hands-on lab for testing and analyzing security vulnerabilities.

**Tools Used:**
- Kali Linux  
- Wireshark  
- Nmap  
- Metasploit  
- Burp Suite  

**Key Work:**
- Network traffic analysis  
- Vulnerability scanning  
- Web security testing  

---

## 🛠 Tech Stack

- **Frontend:** React (Vite), Tailwind CSS  
- **DevOps:** Docker, Nginx  
- **Security Tools:** Wireshark, Nmap, Metasploit, Burp Suite  
- **Systems:** Linux, Networking  

---

## 🚀 Run Locally

```bash
docker build -t portfolio-app .
docker run -p 8080:80 portfolio-app
npm install
npm run dev
