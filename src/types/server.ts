export interface Server {
  id: string;
  name: string;
  environment: 'production' | 'staging' | 'development';
  location: string;
}