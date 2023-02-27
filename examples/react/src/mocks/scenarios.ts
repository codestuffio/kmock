const base = {
  test: {
    path: "/api/test",
    method: "get",
    response: {
      test: "test",
      itWorks: true,
      reminders: [],
    },
  },
};

const scenarios = {
  test: {
    ...base.test,
  },
};

const buildScenarioAsMirageRoute = (scenario) => {
  const flatScenario = Object.values(scenario);
  const mirageRoute = flatScenario.map((route) => {
    return {
      [route.method]: route.path,
      response: route.response,
    };
  });
  return mirageRoute;
};

export { base, scenarios };
