import { Project } from "../typings";

export const fetchPageInfo = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};
