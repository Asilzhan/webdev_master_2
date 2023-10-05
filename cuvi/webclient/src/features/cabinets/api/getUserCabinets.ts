// import api from "@/module/api";
import type { Cabinet } from "../types";

export default async function getUserCabinets() {
  // return api.get("cabinets").json<Cabinet[]>();

  return [
    { name: "Web Development", description: "Exploring the intricacies of developing for the web, from frontend to backend." },
    { name: "Data Science", description: "Diving deep into data analysis, machine learning, and statistical methods." },
    { name: "Artificial Intelligence", description: "Understanding the principles of AI, neural networks, and deep learning." },
    { name: "Cybersecurity", description: "Learning about network security, ethical hacking, and digital forensics." },
    { name: "Quantum Computing", description: "Exploring the world of qubits, superposition, and quantum mechanics." },
    { name: "Robotics", description: "Designing, building, and programming robots for various applications." },
    { name: "Digital Design", description: "Creating digital art, graphics, and understanding UI/UX principles." },
    { name: "Networking", description: "Studying the protocols, architectures, and technologies behind computer networks." },
    { name: "Databases", description: "Understanding relational and non-relational databases, SQL, and data warehousing." },
    { name: "Operating Systems", description: "Exploring the core software of computers, from Linux to Windows." },
  ] as Cabinet[];
}
