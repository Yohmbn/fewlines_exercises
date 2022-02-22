import fetch from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
}

export type GitHub = {
  message: string;
  repos_url: string;
}


export const getReposUrl = async (nickname: string): Promise<string> => {
  const response = await fetch(`https://api.github.com/users/${nickname}`);
  const data = await response.json();

  const url = data.repos_url;

  if (data.message === "Not Found"){
    throw new Error("Error : user not found");
  }
  return url;
}

export const getRepos = async (url: string): Promise<Repo[]> => {
  const response = await fetch (url);
  const result =  await response.json()
  return result;
}

export const printRepos = (array: Repo[]): Repo[] => {
   array.forEach(element => console.log(`${array.indexOf(element)+1} - ${element.name}`));
  return array
}


export const printRepository = (repo : Repo): void => {
  console.log(repo.name)
  console.log(repo.description)
  console.log(repo.subscribers_count)
  console.log(repo.stargazers_count)
  console.log(repo.language)
  console.log(repo.url)

}

export const getProjectInformations = async (url: string): Promise<string> => {
  const response = await fetch (url);
  const result = await response.json();
  return result;
}
