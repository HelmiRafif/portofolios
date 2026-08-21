export type GitHubContentResponse = {
  type: "file" | "dir";
  encoding?: "base64";
  content?: string;
  sha?: string;
  path: string;
  name: string;
};

export type GitHubUpdateContentResponse = {
  content?: {
    sha: string;
    path: string;
  };
  commit?: {
    sha: string;
    html_url?: string;
  };
};
