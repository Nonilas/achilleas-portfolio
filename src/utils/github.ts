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
  size?: number;
  open_issues_count?: number;
  default_branch?: string;
}

// Interface for GitHub user stats
export interface GitHubStats {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  mostUsedLanguages: { [key: string]: number };
  recentActivity: string;
}

// Interface for contribution data
export interface ContributionData {
  date: string;
  count: number;
}

// Get featured projects from GitHub
export async function getFeaturedProjects(username: string): Promise<GitHubProject[]> {
  // Define repositories to exclude
  const excludedRepos = ["Nonilas"];
  
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  });

  try {
    const { data: repos } = await octokit.rest.repos.listForUser({
      username,
      sort: 'updated',
      per_page: 100,
    });
    
    const featuredProjects = repos
      .filter(repo => 
        // Exclude specific repositories by name
        !excludedRepos.includes(repo.name) && 
        // Original filter logic
        (!repo.fork || ((repo.topics && repo.topics.length > 0) || repo.description))
      )
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
        size: repo.size || 0,
        open_issues_count: repo.open_issues_count || 0,
        default_branch: repo.default_branch || 'main',
      }));

    return featuredProjects;
  } catch (error) {
    console.error('Detailed error in getFeaturedProjects:', error);
    throw error; // Re-throw to handle in the component
  }
}

// Get specific project details
export async function getProjectDetails(username: string, repoName: string): Promise<GitHubProject | null> {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
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
      size: repo.size || 0,
      open_issues_count: repo.open_issues_count || 0,
      default_branch: repo.default_branch || 'main',
    };
  } catch (error) {
    console.error('Error fetching project details:', error);
    return null;
  }
}

// Get GitHub user statistics
export async function getGitHubStats(username: string): Promise<GitHubStats | null> {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  });

  try {
    const { data: user } = await octokit.rest.users.getByUsername({
      username,
    });

    const { data: repos } = await octokit.rest.repos.listForUser({
      username,
      per_page: 100,
    });

    // Calculate statistics
    const totalRepos = user.public_repos;
    const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
    const totalForks = repos.reduce((sum, repo) => sum + (repo.forks_count || 0), 0);

    // Calculate most used languages
    const languages: { [key: string]: number } = {};
    repos.forEach(repo => {
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1;
      }
    });

    // Get recent activity (most recent repository update)
    const recentRepo = repos.sort((a, b) => 
      new Date(b.updated_at || '').getTime() - new Date(a.updated_at || '').getTime()
    )[0];

    return {
      totalRepos,
      totalStars,
      totalForks,
      mostUsedLanguages: languages,
      recentActivity: recentRepo?.updated_at || '',
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return null;
  }
}