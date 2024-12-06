import React from "react";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen  py-8 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto  p-8 rounded-lg border-2 border-gray-400 shadow-md">
        <h1 className="text-4xl font-bold text-gray-200 mb-8 text-center">
          Terms of Use
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Effective Date: December 7, 2024
        </p>

        <div className="space-y-6 text-white">
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using MakeMyReadMe, you agree to be bound by these
              Terms of Use. These terms may be updated from time to time without
              notice. Your continued use of the website constitutes acceptance
              of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              2. Use of the Website
            </h2>
            <p>
              MakeMyReadMe is a free service designed to help users generate
              README files for their GitHub repositories. You are granted a
              limited, non-exclusive, and non-transferable license to use the
              website for personal or commercial purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">3. User Content</h2>
            <p>
              You retain all rights to any content you provide to MakeMyReadMe,
              including but not limited to GitHub repository links and input
              text. By submitting content, you grant MakeMyReadMe a
              non-exclusive, worldwide, royalty-free license to use, display,
              and modify your content solely for generating README files.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              4. Prohibited Conduct
            </h2>
            <div>
              You agree not to engage in any activity that may:
              <ul className="list-disc pl-6">
                <li>Violate any applicable laws or regulations.</li>
                <li>Infringe on the intellectual property rights of others.</li>
                <li>Disrupt or interfere with the website’s functionality.</li>
                <li>
                  Attempt to gain unauthorized access to the website or its
                  servers.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              5. Intellectual Property
            </h2>
            <p>
              All content and materials on MakeMyReadMe, including but not
              limited to logos, design elements, and software, are the property
              of MakeMyReadMe or its licensors. You may not use any of these
              materials without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              6. Disclaimer of Warranties
            </h2>
            <p>
              MakeMyReadMe is provided on an "as-is" and "as-available" basis.
              We make no warranties or representations regarding the accuracy,
              reliability, or availability of the website. Use of the website is
              at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              7. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, MakeMyReadMe and its
              affiliates shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising from your use
              of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              8. Third-Party Links
            </h2>
            <p>
              MakeMyReadMe may include links to third-party websites. We do not
              endorse or assume any responsibility for the content, products, or
              services provided by third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              9. Termination of Use
            </h2>
            <p>
              We reserve the right to terminate or suspend access to
              MakeMyReadMe at any time, without notice, for any reason,
              including violations of these Terms of Use.
            </p>
          </section>

          {/* <section>
            <h2 className="text-2xl font-semibold mb-2">10. Governing Law</h2>
            <p>
              These Terms of Use shall be governed by and construed in
              accordance with the laws of [Your Country/State], without regard
              to its conflict of law principles.
            </p>
          </section> */}

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              10. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms of Use, please contact
              us at:
              <br />
              <strong>Email:</strong> makemyreadme@gmail.com
              <br />
              <strong>Website:</strong> http://www.makemyreadme.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
