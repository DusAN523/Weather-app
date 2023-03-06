const UseFetchForm = async (url, input1, input2) => {
  const data = { email: input1, password: input2 };
  let token = null;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      const resBody = await response.json();
      token = resBody;
    }
  } catch (error) {
    throw Error(error);
  }
  return { token };
};
export default UseFetchForm;
