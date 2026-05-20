import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import profile from "../../assets/profile.jpg";

export default function Sidebar() {
  return (
    <aside className="w-full max-w-sm">
      <div className="w-full bg-[#2b2b2b] border border-[#383838] rounded-3xl p-8 text-white sticky top-6">
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <div className="mb-6">
            <img src={profile} alt="profile-img" />
          </div>

          {/* Name */}
          <h2 className="text-3xl font-bold mb-3">Dy Sorint</h2>

          {/* Title */}
          <p className="text-amber-400 text-[12px] mb-6 bg-gray-700 p-2 rounded-lg">
            FrontEnd Developer
          </p>

          {/* Divider */}
          <div className="w-full border-b border-gray-700 mb-8"></div>
        </div>

        {/* Contact Information */}
        <div className="space-y-5 mb-8">
          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="bg-gray-700 p-3 rounded-lg shrink-0">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wide">
                EMAIL
              </p>
              <p className="text-gray-200 text-sm">sorint1123@gmail.com</p>
            </div>
          </div>

          {/* Email]] */}
          {/* <div className="flex items-start gap-4">
              <div className="bg-gray-700 p-3 rounded-lg shrink-0">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide">
                  EMAIL
                </p>
                <p className="text-gray-200 text-sm">sorint1123@gmail.com</p>
              </div>
            </div> */}

          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="bg-gray-700 p-3 rounded-lg shrink-0">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wide">
                LOCATION
              </p>
              <p className="text-gray-200 text-sm">Phnom Penh, Cambodia</p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-3 pt-3 border-t border-gray-700">
          <a href="https://www.facebook.com/dyyysorintzzz/" className="">
            <FontAwesomeIcon icon={faFacebook} spin />
          </a>
          <a href="https://www.linkedin.com/feed/" className="">
            <FontAwesomeIcon icon={faLinkedin} spin />
          </a>
          <a href="https://www.instagram.com/_rintinttz_/" className="">
            <FontAwesomeIcon icon={faInstagram} spin />
          </a>
          <a href="https://github.com/dsorintz36" className="">
            <FontAwesomeIcon icon={faGithub} spin />
          </a>
        </div>
      </div>
    </aside>
  );
}
