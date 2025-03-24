import React from "react";

function TandC() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center text-gray-300">
      <div className="max-w-4xl bg-gray-800 rounded-3xl shadow-2xl p-6 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Terms and Conditions</h2>
        <div className="space-y-4 text-sm text-gray-400">
          <p>
            <strong>Ownership:</strong> The idea and the code belong to the creator, Shaik Mohammad Vaseem. Any replication, reverse-engineering, or unauthorized commercial use of the app is strictly prohibited.
          </p>
          <p>
            <strong>Usage Rules:</strong> Users must use this app responsibly and for its intended purposes. Misuse of the app for fraudulent activities or any unauthorized purposes is prohibited.
          </p>
          <p>
            <strong>Liability Disclaimer:</strong> This app is provided "as is" without warranties of any kind. The creator and the app are not responsible for any damages or losses resulting from its use. Additionally, the app and the creator are not liable for any fraudulent activities committed by other users of the app.
          </p>
          <p>
            <strong>Privacy Policy:</strong> Personal information provided by users will only be utilized for app functionality and will not be shared with third parties.
          </p>
          <p>
            <strong>Modification of Terms:</strong> These terms may be updated periodically. Continued use of the app after modifications constitutes acceptance of the revised terms.
          </p>
          <p>
            <strong>Governing Law:</strong> These terms are governed by the laws of India, and any disputes will be resolved under Indian law.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TandC;
