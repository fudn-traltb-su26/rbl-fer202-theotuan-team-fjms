import React, { useState } from 'react';
import { Bookmark, BookmarkCheck, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { saveProject, unsaveProject } from '../store/projectSlice';

function ProjectCard({ project, onViewDetails }) {
  const savedProjects = useSelector((state) => state.project.savedProjects);
  const dispatch = useDispatch();
  
  const isSaved = savedProjects.some((p) => p.id === project.id);

  const [showProposalModal, setShowProposalModal] = useState(false);
  const [proposalSubmitted, setProposalSubmitted] = useState(false);

  const formatVND = (value) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  };

  const handleApply = () => {
    setProposalSubmitted(true);
    setTimeout(() => {
      setProposalSubmitted(false);
      setShowProposalModal(false);
    }, 1800);
  };

  const handleSaveToggle = (e) => {
    e.stopPropagation();
    if (isSaved) {
      dispatch(unsaveProject(project.id));
    } else {
      dispatch(saveProject(project));
    }
  };

  return (
    <>
      <div className="h-full bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-250 p-6 flex flex-col justify-between text-slate-800 dark:text-white">
        <div>
          {/* Header: Category Badge & Bookmark Button */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <img 
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(project.title)}&radius=10&backgroundColor=059669`} 
                loading="lazy" 
                alt="Logo" 
                className="w-10 h-10 rounded-lg border border-slate-100 dark:border-slate-700" 
              />
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400">
                {project.category}
              </span>
            </div>
            
            <button
              onClick={handleSaveToggle}
              className={`p-2 rounded-full border-0 flex items-center justify-center transition-all cursor-pointer ${
                isSaved ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 hover:bg-slate-200'
              }`}
              title={isSaved ? "Bỏ lưu dự án" : "Lưu dự án quan tâm"}
            >
              {isSaved ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
            </button>
          </div>

          {/* Title & Description */}
          <h3 
            className="text-lg font-bold mb-2 leading-snug cursor-pointer hover:text-emerald-600 transition-colors"
            onClick={onViewDetails}
          >
            {project.title}
          </h3>

          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Skills Badges */}
          {project.requiredSkills && project.requiredSkills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.requiredSkills.map((skill, idx) => (
                <span key={idx} className="text-[11px] font-medium px-2 py-0.5 rounded border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer Meta: Budget & Action Buttons */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-700 mt-auto">
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="text-slate-400 text-[11px] block">Ngân sách dự kiến</span>
              <span className="text-md font-extrabold text-emerald-600 dark:text-emerald-400">
                {formatVND(project.budget)}
              </span>
            </div>
            {project.duration && (
              <div className="text-right">
                <span className="text-slate-400 text-[11px] flex items-center justify-end gap-1">
                  <Clock size={12} /> Thời gian
                </span>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {project.duration}
                </span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button 
              className={`w-full py-2 px-3 font-semibold text-sm rounded-lg flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                isSaved 
                  ? 'border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700' 
                  : 'border-emerald-600 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/20'
              }`}
              onClick={handleSaveToggle}
            >
              {isSaved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
              <span>{isSaved ? "Đã lưu" : "Lưu dự án"}</span>
            </button>

            <button 
              className="w-full py-2 px-3 font-semibold text-sm bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-emerald-600 shadow-sm"
              onClick={() => setShowProposalModal(true)}
            >
              <Send size={15} />
              <span>Ứng tuyển</span>
            </button>
          </div>
        </div>
      </div>

      {/* Proposal Modal Preview (Simple Tailwind styled modal overlay) */}
      {showProposalModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1050] p-4">
          <div className="bg-white dark:bg-slate-800 rounded-xl max-w-md w-full shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700">
            <div className="bg-slate-50 dark:bg-slate-900 px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center text-slate-800 dark:text-white">
              <h3 className="font-bold text-md text-slate-800 dark:text-white">
                Gửi báo giá / Proposal — {project.title}
              </h3>
              <button onClick={() => setShowProposalModal(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer font-bold text-lg">&times;</button>
            </div>
            
            <div className="p-6">
              {proposalSubmitted ? (
                <div className="text-center py-6 text-emerald-600 dark:text-emerald-400 flex flex-col items-center">
                  <CheckCircle2 size={54} className="mb-3 animate-bounce" />
                  <h5 className="font-bold text-lg">Nộp báo giá thành công!</h5>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">Nhà tuyển dụng sẽ nhận được hồ sơ của bạn và phản hồi trong thời gian sớm nhất.</p>
                </div>
              ) : (
                <div className="text-slate-800 dark:text-white">
                  <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4 border border-slate-100 dark:border-slate-700 text-sm">
                    <div className="flex justify-between mb-1.5">
                      <span className="font-semibold text-slate-600 dark:text-slate-400">Danh mục:</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">{project.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-600 dark:text-slate-400">Ngân sách dự án:</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">{formatVND(project.budget)}</span>
                    </div>
                  </div>

                  <div className="mb-4 text-left">
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">Chào thầu & Báo giá mong muốn (VND):</label>
                    <input type="number" className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-900 outline-emerald-600" defaultValue={project.budget} />
                  </div>

                  <div className="mb-4 text-left">
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">Thư giới thiệu / Đề xuất giải pháp:</label>
                    <textarea 
                      className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-900 outline-emerald-600" 
                      rows={4} 
                      placeholder="Mô tả kinh nghiệm của bạn..."
                      defaultValue="Chào bạn, tôi có hơn 3 năm kinh nghiệm trong lĩnh vực này và đã thực hiện thành công các dự án tương tự. Tôi rất mong muốn hợp tác cùng bạn!"
                    />
                  </div>
                </div>
              )}
            </div>
            
            {!proposalSubmitted && (
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700 flex justify-end gap-2">
                <button 
                  onClick={() => setShowProposalModal(false)}
                  className="px-4 py-2 text-sm font-semibold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                >
                  Hủy bỏ
                </button>
                <button 
                  onClick={handleApply}
                  className="px-4 py-2 text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg cursor-pointer"
                >
                  Gửi ứng tuyển
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
