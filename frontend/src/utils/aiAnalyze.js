import axios from "axios";
import { useState, useContext } from "react";
import { codeContext } from "../context/codeContext";
import { useToast } from "@chakra-ui/react";

export const useAIAnalyze = () => {
  const { setAIResponse } = useContext(codeContext);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const aiAnalyze = async (error) => {
    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/analyze-code",
        {
          error,
        }
      );

      const content = response.data.choices[0].message.content;
      setAIResponse(content);
      setLoading(false);

      return content;
    } catch (error) {
      setLoading(false);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    }
  };

  return {
    aiAnalyze,
    loading,
  };
};
