const routes = {
  reposDetails: {
    mask: "/repos/:id",
    create: (id: number): string => `/repos/${id}`,
  },
};

export default routes;
