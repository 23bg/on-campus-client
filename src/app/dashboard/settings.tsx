// pages/Settings.tsx
import Footer from '@/components/custom/footer';
import PageHeader from '@/components/custom/page-header';
import { useState } from 'react';

const settingsMenu = [
  { id: 1, title: "General Settings" },
  { id: 2, title: "Account Settings" },
  { id: 3, title: "Notification Settings" },
  { id: 4, title: "Privacy Settings" },
];

function Settings() {
  const [activeMenu, setActiveMenu] = useState(settingsMenu[0].id);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
       <div className="pt-16"/>
      {/* Header */}
      <PageHeader
        title="Settings"
        description="Manage your preferences and account settings."
      />

      {/* Main Content */}
      <div className="flex justify-between items-center md:mx-36 px-6 space-x-4">
        {/* Left Side Menu */}
        <div className="w-full lg:w-1/4 h-full overflow-y-auto pr-4">
          <div className="space-y-4">
            {settingsMenu.map((item) => (
              <button
                key={item.id}
                className={`w-full text-left p-2 rounded-md ${
                  activeMenu === item.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setActiveMenu(item.id)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-3/4 h-full">
          <div className="space-y-4">
            {/* Add different content based on activeMenu */}
            {activeMenu === 1 && (
              <div>
                <h2 className="text-xl font-semibold">General Settings</h2>
                <p>Configure your general settings here...</p>
              </div>
            )}
            {activeMenu === 2 && (
              <div>
                <h2 className="text-xl font-semibold">Account Settings</h2>
                <p>Manage your account preferences here...</p>
              </div>
            )}
            {activeMenu === 3 && (
              <div>
                <h2 className="text-xl font-semibold">Notification Settings</h2>
                <p>Set up your notification preferences...</p>
              </div>
            )}
            {activeMenu === 4 && (
              <div>
                <h2 className="text-xl font-semibold">Privacy Settings</h2>
                <p>Adjust your privacy settings here...</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Settings;
