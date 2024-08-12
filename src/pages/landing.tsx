import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

  const [longUrl, setLongUrl] = useState();
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };
  return (
    <div className='flex flex-col items-center'>
      <h2 className='my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl
       text-white text-center font-extrabold'> 
       Links too long? <br /> Let Scissors do the trimming</h2>
       <form onSubmit ={handleShorten}className='sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2'>
        <Input type='url'
        value={longUrl} 
        placeholder='Paste your long URL'
        onChange={ (e) => setLongUrl(e.target.value)}
        className='h-full flex-1 py-4 px-4'
        />
        <Button className='h-full' type='submit' variant='destructive'> Shorten url</Button>
       </form>
       <img src ='/img.png' alt='poster' className="w-full my-11 md:px-11" />
       <Accordion type="multiple" collapsible className='w-full md:px-11'>
        <AccordionItem value="item-1">
          <AccordionTrigger>How does scissors URL shortener work?</AccordionTrigger>
          <AccordionContent>
           When you paste a long URL, our system generates a 
           shorter URL.The shortened URL still takes you to the same webpage as the original URL
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Do I need to sign Up to use the app?</AccordionTrigger>
          <AccordionContent>
            Yes. Creating an account helps you to manage your URLs
            and also customize your short URLs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What other features are available?</AccordionTrigger>
          <AccordionContent>
            Asides being able to customize your short URLs, you
            can also generate a qr code for your links.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    
    </div>
  )
}

export default LandingPage;