"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import axios from "axios";
export default function NewsLetterModal() {
  const pathname = usePathname();
  const modalElement = useRef();
  useEffect(() => {
    const showModal = async () => {
      if (pathname === "/") {
        const bootstrap = await import("bootstrap"); // dynamically import bootstrap
        const myModal = new bootstrap.Modal(
          document.getElementById("newsletterPopup"),
          {
            keyboard: false,
          }
        );

        // Show the modal after a delay using a promise
        await new Promise((resolve) => setTimeout(resolve, 2000));
        myModal.show();

        modalElement.current.addEventListener("hidden.bs.modal", () => {
          myModal.hide();
        });
      }
    };

    showModal();
  }, [pathname]);
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };
  const sendEmail = async (e) => {
    try {
      const response = await fetch("/api/add-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: e.target.email.value }),
      });

      // Check if the response status is success (201: Created)
      if (response.ok) {
        e.target.reset(); // Reset the form
        setSuccess(true); // Set success state
      } else {
        setSuccess(false); // Handle unexpected responses
      }

      handleShowMessage(); // Display the success or error message
    } catch (error) {
      console.error("Error during campaign creation:", error);
      setSuccess(false); // Set success to false if there's an error
      e.target.reset(); // Reset the form
      setSuccess(true); // Set success state
      handleShowMessage(); // Display the error message
    }
  };

  return (
    <div
      className="modal modalCentered fade auto-popup modal-newleter"
      id="newsletterPopup"
      ref={modalElement}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-top">
            <Image
              className="lazyload"
              data-src="/images/section/newsletter.jpg"
              alt="/images"
              src="/images/section/newsletter.jpg"
              width={660}
              height={440}
            />
            <span
              className="icon icon-close btn-hide-popup"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="modal-bottom text-center">
            <p className="text-btn-uppercase fw-4 font-2">
              Subscribe To Our Newletter!
            </p>
            <h5>
              Receive 10% OFF your next order, exclusive offers &amp; more!
            </h5>
            <div
              className={`tfSubscribeMsg  footer-sub-element ${
                showMessage ? "active" : ""
              }`}
            >
              {success ? (
                <p style={{ color: "rgb(52, 168, 83)" }}>
                  You have successfully subscribed.
                </p>
              ) : (
                <p style={{ color: "red" }}>Something went wrong</p>
              )}
            </div>
            <form
              id="subscribe-form"
              onSubmit={(e) => {
                e.preventDefault();
                sendEmail(e);
              }}
              className="form-newsletter-subscribe"
            >
              <div id="subscribe-content">
                <input
                  type="email"
                  name="email"
                  id="subscribe-email"
                  placeholder="Enter your e-mail"
                  required
                />
                <button
                  type="submit"
                  id="subscribe-button"
                  className="btn-style-2 radius-12 w-100 justify-content-center"
                >
                  <span className="text text-btn-uppercase">SUBSCRIBE</span>
                </button>
              </div>
              <div id="subscribe-msg" />
            </form>
            <ul className="tf-social-icon style-default justify-content-center">
              <li>
                <a href="#" className="social-facebook">
                  <i className="icon icon-fb" />
                </a>
              </li>
              <li>
                <a href="#" className="social-twiter">
                  <i className="icon icon-x" />
                </a>
              </li>
              <li>
                <a href="#" className="social-instagram">
                  <i className="icon icon-instagram" />
                </a>
              </li>
              <li>
                <a href="#" className="social-pinterest">
                  <i className="icon icon-pinterest" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
