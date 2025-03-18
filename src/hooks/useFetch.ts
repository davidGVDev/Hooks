import { useEffect, useState } from "react";

interface State {
  data: any;
  isLoading: boolean;
  hasError: boolean;
  errorMessage: any;
}

const localCache: Record<string, any> = {};

export const useFetch = (url: string) => {
  const [state, setState] = useState<State>({
    data: null,
    isLoading: true,
    hasError: false,
    errorMessage: {},
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoading = (isLoading: boolean) => {
    setState({
      ...state,
      isLoading,
    });
  };

  const getFetch = async () => {
    if (localCache[url]) {
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        errorMessage: {},
      });
      return;
    }

    setLoading(true);

    const resp = await fetch(url);
    //sleep 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        errorMessage: {
          code: resp.status,
          message: resp.statusText,
        },
      });
      return;
    }
    const data = await resp.json();
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      errorMessage: {},
    });
    localCache[url] = data;
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    errorMessage: state.errorMessage,
  };
};
