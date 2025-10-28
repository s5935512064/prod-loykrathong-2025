export {}; // This is here to prevent `PageProps` at the bottom from being exposed

declare global {
  interface ManagerKrathong {
    id: number;
    name: string;
    wish: string;
    profile: string;
    krathong_type: number;
  }

  interface KratongItem {
    id: number;
    name: string;
    src: string;
    type: number;
  }

  interface LocalKratongItem {
    name: string;
    wish: string;
    kratong: {
      id: number;
      name: string;
      src: string;
      type: number;
    };
    loy: boolean;
  }

  interface KratongFetch {
    id: number;
    uid: string;
    createdAt: string;
    member_name: string;
    member_wish: string;
    krathong_type: number;
    krathong_src: string;
    device_os: string;
    device_browser: string;
    device_ip: string;
    loy: boolean;
  }
}
