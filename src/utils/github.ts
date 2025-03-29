import { Octokit } from 'octokit';

// Create an interface for the project data
export interface GitHubProject {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

// Get featured projects from GitHub
export async function getFeaturedProjects(username: string): Promise<GitHubProject[]> {
  // Initialize Octokit with a Personal Access Token if you have one
  // For public repos, you can use without authentication but with rate limits
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN, // Changed from GITHUB_TOKEN
  });

  try {
    // Get user's repositories
    const { data: repos } = await octokit.rest.repos.listForUser({
      username,
      sort: 'updated',
      per_page: 100,
    });

    // Filter out forks and select projects with topics or descriptions
    const featuredProjects = repos
      .filter(repo => !repo.fork && ((repo.topics && repo.topics.length > 0) || repo.description))
      // Only include the properties we need
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || '',
        html_url: repo.html_url,
        homepage: repo.homepage || null,
        topics: repo.topics || [],
        language: repo.language || 'Not specified',
        stargazers_count: repo.stargazers_count || 0,
        forks_count: repo.forks_count || 0,
        updated_at: repo.updated_at || '',
      }));

    return featuredProjects;
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return [];
  }
}

// Get specific project details
export async function getProjectDetails(username: string, repoName: string): Promise<GitHubProject | null> {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN, // Changed from GITHUB_TOKEN
  });

  try {
    const { data: repo } = await octokit.rest.repos.get({
      owner: username,
      repo: repoName,
    });

    return {
      id: repo.id,
      name: repo.name,
      description: repo.description || '',
      html_url: repo.html_url,
      homepage: repo.homepage,
      topics: repo.topics || [],
      language: repo.language || 'Not specified',
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      updated_at: repo.updated_at,
    };
  } catch (error) {
    console.error('Error fetching project details:', error);
    return null;
  }
}