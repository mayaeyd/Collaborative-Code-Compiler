import axios from "axios";
import { useState, useContext } from "react";
import { codeContext } from "../context/codeContext";

export const useAIAnalyze = async (output) => {
  const { setAIResponse } = useContext(codeContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const aiAnalyze = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/analyze-code",
        {
          error: output,
        }
      );

      const content = response.data.choices[0].message.content;
      setAIResponse(content);
      setLoading(false);

      return content;
    } catch (error) {
      setError("An error occurred while analyzing");
      setLoading(false);
      console.error(error);
    }
  };

  return [
    aiAnalyze,
    loading,
    error,
  ];
};
