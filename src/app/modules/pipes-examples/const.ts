import { SafeDomComponent } from "@pipes-examples/components/safe-dom.component";

export const pipePaths = {
  safe: 'safe',
};

export const childrenPipes = [
  { path: pipePaths.safe, component: SafeDomComponent },
]
