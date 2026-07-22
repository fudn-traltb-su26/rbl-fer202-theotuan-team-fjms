import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Banner() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700 text-white py-16 px-4 relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto relative z-10">
        <span className="inline-flex items-center gap-2 bg-white text-emerald-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 shadow-md">
          <Sparkles size={16} className="text-emerald-600" />
          Nền Tảng Đăng Việc & Kết Nối Lập Trình Viên Hàng Đầu
        </span>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
          Tìm Dự Án Công Nghệ & Nhận Việc Ngay Hôm Nay
        </h1>

        <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          FJMS kết nối các doanh nghiệp công nghệ với đội ngũ Freelancer chất lượng cao tại Việt Nam. Minh bạch, nhanh chóng và bảo mật thanh toán tuyệt đối.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button 
            onClick={() => navigate('/projects')}
            className="px-6 py-3 font-bold bg-white text-emerald-800 hover:bg-emerald-50 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 rounded-lg shadow-lg cursor-pointer"
          >
            <span>Xem danh sách việc làm</span>
            <ArrowRight size={20} />
          </button>
          <button 
            onClick={() => navigate('/admin')}
            className="px-6 py-3 font-semibold border border-white hover:bg-white/10 active:scale-95 transition-all duration-200 rounded-lg cursor-pointer"
          >
            Quản lý dự án (Employer)
          </button>
        </div>

        {/* Sub-highlights */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20 text-emerald-200">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck size={20} className="text-yellow-400 hidden sm:inline" />
            <span className="text-sm font-medium text-white">Thanh toán bảo đảm</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Zap size={20} className="text-yellow-400 hidden sm:inline" />
            <span className="text-sm font-medium text-white">Phản hồi dưới 24h</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Users size={20} className="text-yellow-400 hidden sm:inline" />
            <span className="text-sm font-medium text-white">10,000+ Thành viên</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
