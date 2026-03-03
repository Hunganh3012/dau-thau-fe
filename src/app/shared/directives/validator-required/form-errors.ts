import { InjectionToken } from '@angular/core';

type SafeAny = any;

export const defaultErrors = {
  required: () => 'Vui lòng không được bỏ trống',
  minlength: (field: SafeAny) => `Bắt buộc nhập tối thiểu ${field.requiredLength} kí tự`,
  maxlength: (field: SafeAny) => `Bắt buộc nhập tối đa ${field.requiredLength} kí tự`,
  email: () => 'Định dạng Email không chính xác',
  isInvalidNamHoc: () => 'Năm học phải là số có 4 chữ số và lớn hơn 2000',
  isInvalidNienHoc: () => 'Niên khóa phải có định dạng: <năm trước> - <năm sau>',
  hasSpecialChars: () => 'Vui lòng không nhập vào ký tự đặc biệt',
  isInvalidNienHocSpace: () => 'Giữa dấu - có khoảng trắng',
  invalidNumber: () => 'Bắt buộc phải nhập số',
  invalidSpace: () => 'Nội dung không được có khoảng trắng',
  invalidPhoneNumber: () => 'Định dạng số điện thoại không chính xác',
  mustMatch: () => 'Xác nhận mật khẩu không khớp',
  invalidIdCardNumber: () => 'Số CMND/CCCD/Hộ chiếu là 8 hoặc 9 hoặc 12 ký tự',
  invalidIdCardNumberSpecialWord: () => 'Số CMND/CCCD/Hộ chiếu có chứa ký tự đặc biệt',
  invalidNoAccent: () => 'Nội dung không được có dấu',
  invalidSpecialWord: () => 'Nội dung chứa ký tự đặc biệt',
  invalidTaxCode: () => 'Mã số thuế không đúng định dạng',
  invalidLimitText: () => 'Nội dung không được phép vượt quá 500 kí tự',
  maxLengthKhoaHoc: () => 'Mã khóa học không vượt quá 50 ký tự',
  maxLengthNhomKhoaHoc: () => 'Mã nhóm khóa học không vượt quá 50 ký tự',
  maxLength100: () => 'Vượt quá kí tự cho phép',
  maxLength250: () => 'Vượt quá kí tự cho phép',
  positiveInteger: () => 'Giá trị là số nguyên dương',
  siSoInvalid: () => 'Sĩ số tối đa phải lớn hơn sĩ số tối thiểu',
  isMinMaxInvalid: () => 'Khoảng giá trị không hợp lệ',
  exactLength10: () => 'Mã học phần không đúng cấu trúc',
  invalidScore: () => 'Vui lòng nhập theo thang điểm quy đổi.',
  invalidThangDiemToiDa: () => 'Vui lòng nhập đúng định dạng',
  denDiemInvalid: () => 'Đến điểm phải lớn hơn Từ điểm',
  maxLength200: () => 'Vượt quá kí tự cho phép',
  requiredArray: () => 'Vui lòng chọn ít nhất một mục',
  yearRange: () => 'Vượt quá năm cho phép',
};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors,
});
