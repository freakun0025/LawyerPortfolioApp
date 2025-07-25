"use client"

import { useState, useEffect } from "react"
import { Scale } from "lucide-react"
import { 
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction
} from "@/components/ui/alert-dialog"

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    // Always show disclaimer on page load/reload
    setIsOpen(true)
  }, [])
  
  const handleAccept = () => {
    // Just close the modal without storing in localStorage
    setIsOpen(false)
  }
  
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="max-w-[95vw] md:max-w-2xl max-h-[90vh] overflow-y-auto p-4 md:p-6">
        <AlertDialogHeader className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-2">
            <Scale className="h-6 w-6 md:h-8 md:w-8 text-amber-600" />
            <span className="text-lg md:text-xl font-bold text-center">Munish Mittal and Associates</span>
          </div>
          <AlertDialogTitle className="text-xl md:text-2xl mb-2 text-center">DISCLAIMER:</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription className="text-gray-700 text-sm md:text-base text-left space-y-3 md:space-y-4 mt-2">
          <p>
            The rules of the Bar Council of India prohibit law firms from soliciting work or advertising in any manner. 
            By clicking on 'I AGREE', the user acknowledges that:
          </p>
          <ul className="list-disc pl-4 md:pl-6 space-y-2">
            <li>
              The user wishes to gain more information about Munish Mittal and Associates, its practice areas and its attorneys, 
              for his/her own information and use;
            </li>
            <li>
              The information is made available/provided to the user only on his/her specific request and any information 
              obtained or material downloaded from this website is completely at the user's volition and any transmission, 
              receipt or use of this site is not intended to, and will not, create any lawyer-client relationship; and
            </li>
            <li>
              None of the information contained on the website is in the nature of a legal opinion or otherwise amounts to any legal advice.
            </li>
          </ul>
          <p className="mt-3 md:mt-4">
            Munish Mittal and Associates is not liable for any consequence of any action taken by the user relying on 
            material/information provided under this website. In cases where the user has any legal issues, he/she in all 
            cases must seek independent legal advice.
          </p>
        </AlertDialogDescription>
        <AlertDialogFooter className="mt-4 pt-2 flex justify-center md:justify-end">
          <AlertDialogAction 
            onClick={handleAccept}
            className="w-full md:w-auto bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded text-sm md:text-base"
          >
            I Agree
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
