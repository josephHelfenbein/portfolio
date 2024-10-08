function LinkedInIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
    </svg>
  )
}
function GitHubIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 30 30"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
    >
       <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
    </svg>
  )
}
function FileIcon(){
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 -960 960 960"
      fill="#fa4040"
      xmlns="https://www.w3.org/2000/svg"
    >
      <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v240h-80v-200H520v-200H240v640h360v80H240Zm638 15L760-183v89h-80v-226h226v80h-90l118 118-56 57Zm-638-95v-640 640Z"></path>
    </svg>
  )
}
function EmailIcon(){
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 -960 960 960"
      fill="#55cc55"
      xmlns="https://www.w3.org/2000/svg"
    >
      <path d="m720-160-56-56 63-64H560v-80h167l-63-64 56-56 160 160-160 160ZM160-280q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h520q33 0 56.5 23.5T760-760v204q-10-2-20-3t-20-1q-10 0-20 .5t-20 2.5v-147L416-520 160-703v343h323q-2 10-2.5 20t-.5 20q0 10 1 20t3 20H160Zm58-480 198 142 204-142H218Zm-58 400v-400 400Z"></path>
    </svg>
  )
}
export default function Footer() {
  return (
    <footer className="mb-16 selectionsFooter">
      <ul className="text-sm md:text-base mt-6 md:mt-8 flex flex-col space-x-0 space-y-2 text-gray-700 md:flex-row md:space-x-4 md:space-y-0 ">
        <li>
          <a
            className="flex items-center transition-all hover:text-blue-800 "
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/joseph-j-helfenbein/"
          >
            <LinkedInIcon />
            <p className="ml-1 h-7">LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-blue-800 "
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/josephHelfenbein"
          >
            <GitHubIcon />
            <p className="ml-1 h-7">GitHub</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-blue-800"
            rel="noopener noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/16Z81Ed7AQWwLNMPHFyfmhCctw6_twbrb/view?usp=sharing"
          >
            <FileIcon />
            <p className="ml-1 h-7">Resume</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-blue-800"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:jhelfen000@citymail.cuny.edu"
          >
            <EmailIcon />
            <p className="ml-1 h-7">Contact</p>
          </a>
        </li>
      </ul>
    </footer>
  )
}
