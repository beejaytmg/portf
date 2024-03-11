import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const SrcRedirect = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const videoUrl = searchParams.get('src');

  useEffect(() => {
    if (videoUrl) {
      navigate('/play', { replace: true, state: { videoUrl } });
    } else {
      navigate('/error', { state: { message: 'No video URL provided' } });
    }
  }, [videoUrl, navigate]);

  return <div>Redirecting...</div>;
};

export default SrcRedirect;