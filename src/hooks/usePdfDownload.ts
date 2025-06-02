
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const usePdfDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const downloadPdf = async (productId: number, productName: string) => {
    setIsDownloading(true);
    
    try {
      // Fetch PDF data from Supabase
      const { data: pdfData, error } = await supabase
        .from('product_pdfs')
        .select('*')
        .eq('product_id', productId)
        .single();

      if (error || !pdfData) {
        toast({
          title: "PDF Not Available",
          description: `No lab report found for ${productName}`,
          variant: "destructive",
        });
        return;
      }

      // Create a temporary link and trigger download
      const link = document.createElement('a');
      link.href = pdfData.pdf_url;
      link.download = pdfData.pdf_name;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Download Started",
        description: `Downloading ${pdfData.pdf_name}`,
      });

    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download Failed",
        description: "There was an error downloading the PDF",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return { downloadPdf, isDownloading };
};
