function getEnvVariables() {
  return {
    WEBSITE_URL: process.env.WEBSITE_URL as string,
  };
}

export const config = { ...getEnvVariables() };
