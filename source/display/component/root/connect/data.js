const rootUnit = [{
        name: "Rất lớn",
        value: 2
    }, {
        name: "Lớn",
        value: 1
    }, {
        name: "Bình thường",
        value: 0
    }, {
        name: "Nhỏ",
        value: -1
    }, {
        name: "Rất nhỏ",
        value: -2
    }];

const rootData = {
    name: "Root Data",
    value: {
        properties: [{
            name: "Độ ma sát",
            value: [].concat(rootUnit)
        }, {
            name: "Độ kết dính",
            value: [].concat(rootUnit)
        }, {
            name: "Độ đàn hồi",
            value: [].concat(rootUnit)
        }, {
            name: "Độ đẫn điện",
            value: [].concat(rootUnit)
        }, {
            name: "Độ đẫn nhiệt",
            value: [].concat(rootUnit)
        }, {
            name: "Độ cứng",
            value: [].concat(rootUnit)
        }, {
            name: "Vận tốc",
            value: [].concat(rootUnit)
        }, {
            name: "Độ ẩm",
            value: [].concat(rootUnit)
        }, {
            name: "Độ sáng",
            value: [].concat(rootUnit)
        }, {
            name: "Độ trong suốt",
            value: [].concat(rootUnit)
        }, {
            name: "Độ hoà tan",
            value: [].concat(rootUnit)
        }, {
            name: "Kích thước",
            value: [].concat(rootUnit)
        }, {
            name: "Chiều cao",
            value: [].concat(rootUnit)
        }, {
            name: "Chiều dài",
            value: [].concat(rootUnit)
        }, {
            name: "Chiều rộng",
            value: [].concat(rootUnit)
        }, {
            name: "Khối lượng",
            value: [].concat(rootUnit)
        }, {
            name: "Dung lượng",
            value: [].concat(rootUnit)
        }, {
            name: "Thời lượng",
            value: [].concat(rootUnit)
        }, {
            name: "Hình dạng",
            value: [{
                name: "Dây"
            }, {
                name: "Cầu"
            }, {
                name: "Ống"
            }, {
                name: "Trụ"
            }, {
                name: "Hộp"
            }, {
                name: "Tấm"
            }, {
                name: "Khối"
            }, {
                name: "Xuyến"
            }]
        }, {
            name: "Vật liệu",
            value: [{
                name: "Kim loại",
            }, {
                name: "Nhựa"
            }, {
                name: "Gỗ"
            }, {
                name: "Da"
            }, {
                name: "Vải"
            }, {
                name: "Giấy"
            }, {
                name: "Gốm sứ"
            }, {
                name: "Thuỷ tinh"
            }]
        }, {
            name: "Trạng thái",
            value: [{
                name: "Rắn"
            }, {
                name: "Khí"
            }, {
                name: "Lỏng"
            }]
        }, {
            name: "Biến số",
            value: [{
                name: "Số lượng: n"
            }, {
                name: "Vị trí: xy"
            }, {
                name: "Góc độ: α"
            }, {
                name: "Quĩ đạo: f(x)"
            }, {
                name: "Thời điểm: t"
            }, {
                name: "Thời lượng: ts"
            }, {
                name: "Kích thước: to - nhỏ"
            }, {
                name: "Khối lượng: nặng - nhẹ"
            }, {
                name: "Khoảng cách: xa - gần"
            }]
        }, {
            name: "Cảm xúc",
            value: [{
                name: "Phấn khích"
            }, {
                name: "Yên bình"
            }, {
                name: "Đố kị"
            }, {
                name: "Sợ hãi"
            }, {
                name: "Ức chế"
            }, {
                name: "Hồi hộp"
            }, {
                name: "Chờ đợi"
            }, {
                name: "Tức giận"
            }, {
                name: "Căng thẳng"
            }]
        }, {
            name: "Hành động",
            value: [{
                name: "Ăn"
            }, {
                name: "Ấn (xuống)"
            }, {
                name: "Ẩn (giấu)"
            }, {
                name: "Bãi miễn"
            }, {
                name: "Bám"
            }, {
                name: "Bán"
            }, {
                name: "Bào (gỗ)"
            }, {
                name: "Bay"
            }, {
                name: "Băm"
            }, {
                name: "Bắn (súng)"
            }, {
                name: "Bắt (cá)"
            }, {
                name: "Bấm"
            }, {
                name: "Bật (máy)"
            }, {
                name: "Bê"
            }, {
                name: "Bế"
            }, {
                name: "Bò"
            }, {
                name: "Bỏ"
            }, {
                name: "Bóc (vỏ)"
            }, {
                name: "Bọc"
            }, {
                name: "Bón (cây)"
            }, {
                name: "Bóp"
            }, {
                name: "Bổ (củi)"
            }, {
                name: "Bơi"
            }, {
                name: "Bú"
            }, {
                name: "Bung (dù)"
            }, {
                name: "Búng (tay)"
            }, {
                name: "Buộc"
            }, {
                name: "Buông (tay)"
            }, {
                name: "Bưng bê"
            }, {
                name: "Cai"
            }, {
                name: "Cài"
            }, {
                name: "Cãi"
            }, {
                name: "Cào"
            }, {
                name: "Can"
            }, {
                name: "Cán (thép)"
            }, {
                name: "Cản"
            }, {
                name: "Cày"
            }, {
                name: "Cạy (cửa)"
            }, {
                name: "Cắm (trại)"
            }, {
                name: "Cắn"
            }, {
                name: "Cắp"
            }, {
                name: "Cắt"
            }, {
                name: "Cầm"
            }, {
                name: "Cân"
            }, {
                name: "Cất (giữ)"
            }, {
                name: "Câu (cá)"
            }, {
                name: "Cấu (véo)"
            }, {
                name: "Cầu (xin)"
            }, {
                name: "Cấy"
            }, {
                name: "Chà xát"
            }, {
                name: "Chạm"
            }, {
                name: "Chạy"
            }, {
                name: "Chắn (gió)"
            }, {
                name: "Chặn (lối)"
            }, {
                name: "Chặt (cây)"
            }, {
                name: "Châm (lửa)"
            }, {
                name: "Che (ô)"
            }, {
                name: "Chém"
            }, {
                name: "Chèn"
            }, {
                name: "Chỉ (trỏ)"
            }, {
                name: "Chia (xẻ)"
            }, {
                name: "Chiếu"
            }, {
                name: "Cho"
            }, {
                name: "Chọc (ngoáy)"
            }, {
                name: "Chôn"
            }, {
                name: "Chộp"
            }, {
                name: "Chốt (cửa)"
            }, {
                name: "Chơi"
            }, {
                name: "Chụp (ảnh)"
            }, {
                name: "Chuyền (cành)"
            }, {
                name: "Chữa (bệnh)"
            }, {
                name: "Cọ rửa"
            }, {
                name: "Cõng"
            }, {
                name: "Cộng"
            }, {
                name: "Cù (buồn)"
            }, {
                name: "Cuốn"
            }, {
                name: "Cưa"
            }, {
                name: "Cứa"
            }, {
                name: "Cưới"
            }, {
                name: "Cười"
            }, {
                name: "Cưỡi (ngựa)"
            }, {
                name: "Cướp"
            }, {
                name: "Cứu (hộ)"
            }, {
                name: "Dán"
            }, {
                name: "Dập (lửa)"
            }, {
                name: "Dìm"
            }, {
                name: "Dính"
            }, {
                name: "Dò (đường)"
            }, {
                name: "Dồn"
            }, {
                name: "Duyệt"
            }, {
                name: "Dựa (cột)"
            }, {
                name: "Dừng"
            }, {
                name: "Dựng (cột)"
            }, {
                name: "Đá"
            }, {
                name: "Đái"
            }, {
                name: "Đan (len)"
            }, {
                name: "Đánh"
            }, {
                name: "Đảo (tay)"
            }, {
                name: "Đào (đất)"
            }, {
                name: "Đạp (xe)"
            }, {
                name: "Đắp (đê)"
            }, {
                name: "Đặt"
            }, {
                name: "Đâm"
            }, {
                name: "Đấm"
            }, {
                name: "Đầm"
            }, {
                name: "Đập (đá)"
            }, {
                name: "Đậu"
            }, {
                name: "Đẩy"
            }, {
                name: "Đậy (nắp)"
            }, {
                name: "Đè"
            }, {
                name: "Đeo"
            }, {
                name: "Đèo"
            }, {
                name: "Đẽo"
            }, {
                name: "Để"
            }, {
                name: "Đề bạt"
            }, {
                name: "Đếm (tiền)"
            }, {
                name: "Đệm"
            }, {
                name: "Đền"
            }, {
                name: "Đi"
            }, {
                name: "Đính (kèm)"
            }, {
                name: "Đọc"
            }, {
                name: "Đón"
            }, {
                name: "Đóng (cọc)"
            }, {
                name: "Đóng băng"
            }, {
                name: "Đố (vui)"
            }, {
                name: "Đổ (nước)"
            }, {
                name: "Đốt"
            }, {
                name: "Đỡ"
            }, {
                name: "Đu (dây)"
            }, {
                name: "Đun (nước)"
            }, {
                name: "Đùn"
            }, {
                name: "Đụng"
            }, {
                name: "Đuổi"
            }, {
                name: "Đúc"
            }, {
                name: "Đục (gỗ)"
            }, {
                name: "Đưa"
            }, {
                name: "Đứng"
            }, {
                name: "Ép (dầu)"
            }, {
                name: "Gãi"
            }, {
                name: "Gánh"
            }, {
                name: "Gào thét"
            }, {
                name: "Gáy (sáng)"
            }, {
                name: "Găm"
            }, {
                name: "Gắn (kết)"
            }, {
                name: "Gắp"
            }, {
                name: "Gặt (lúa)"
            }, {
                name: "Gấp"
            }, {
                name: "Gập"
            }, {
                name: "Ghi"
            }, {
                name: "Giao"
            }, {
                name: "Giật (điện)"
            }, {
                name: "Gieo (hạt)"
            }, {
                name: "Giội (nước)"
            }, {
                name: "Giữ"
            }, {
                name: "Gõ (trống)"
            }, {
                name: "Gói"
            }, {
                name: "Gọi"
            }, {
                name: "Gọt (vỏ)"
            }, {
                name: "Gùi"
            }, {
                name: "Há (mồm)"
            }, {
                name: "Hàn (thép)"
            }, {
                name: "Hái (quả)"
            }, {
                name: "Hát"
            }, {
                name: "Hắt (nước)"
            }, {
                name: "Hâm (nóng)"
            }, {
                name: "Hầm"
            }, {
                name: "Hấp"
            }, {
                name: "Hất"
            }, {
                name: "Hít"
            }, {
                name: "Ho"
            }, {
                name: "Học"
            }, {
                name: "Hỏi"
            }, {
                name: "Hót (rác)"
            }, {
                name: "Húc"
            }, {
                name: "Hút"
            }, {
                name: "Hứng (dừa)"
            }, {
                name: "Kéo"
            }, {
                name: "Kẹp"
            }, {
                name: "Kê"
            }, {
                name: "Kết nối"
            }, {
                name: "Kêu (rên)"
            }, {
                name: "Kiểm tra"
            }, {
                name: "Khắc"
            }, {
                name: "Khám (phá)"
            }, {
                name: "Khâu"
            }, {
                name: "Khều"
            }, {
                name: "Khoá"
            }, {
                name: "Khoác"
            }, {
                name: "Khoan"
            }, {
                name: "Khóc"
            }, {
                name: "Khoe"
            }, {
                name: "Khoét"
            }, {
                name: "Khuyên"
            }, {
                name: "La hét"
            }, {
                name: "Lái"
            }, {
                name: "Lau chùi"
            }, {
                name: "Lắc"
            }, {
                name: "Lăn"
            }, {
                name: "Lặn"
            }, {
                name: "Lắp (máy)"
            }, {
                name: "Lấy"
            }, {
                name: "Lật"
            }, {
                name: "Leo (núi)"
            }, {
                name: "Lọc (nước)"
            }, {
                name: "Lợp (nhà)"
            }, {
                name: "Lồng (tiếng)"
            }, {
                name: "Lùa"
            }, {
                name: "Lượn (dù)"
            }, {
                name: "Luộc"
            }, {
                name: "Luồn"
            }, {
                name: "Lướt (sóng)"
            }, {
                name: "Luyện (võ)"
            }, {
                name: "Mang"
            }, {
                name: "Mài (dao)"
            }, {
                name: "May (áo)"
            }, {
                name: "Mặc (áo)"
            }, {
                name: "Mếu"
            }, {
                name: "Mò"
            }, {
                name: "Móc"
            }, {
                name: "Moi"
            }, {
                name: "Mổ (thóc)"
            }, {
                name: "Mở (cửa)"
            }, {
                name: "Mớm"
            }, {
                name: "Múa"
            }, {
                name: "Múc"
            }, {
                name: "Mút"
            }, {
                name: "Mượn"
            }, {
                name: "Nằm"
            }, {
                name: "Nắm (tay)"
            }, {
                name: "Nặn"
            }, {
                name: "Nắn (thẳng)"
            }, {
                name: "Nấu (ăn)"
            }, {
                name: "Ném (đá)"
            }, {
                name: "Nêm"
            }, {
                name: "Nén"
            }, {
                name: "Neo"
            }, {
                name: "Ngã"
            }, {
                name: "Ngắm (nhìn)"
            }, {
                name: "Ngăn (đập)"
            }, {
                name: "Ngắt"
            }, {
                name: "Ngáng"
            }, {
                name: "Ngâm (rượu)"
            }, {
                name: "Ngân (chuông)"
            }, {
                name: "Nghe"
            }, {
                name: "Nghỉ ngơi"
            }, {
                name: "Nghịch"
            }, {
                name: "Nghiền"
            }, {
                name: "Nghiến"
            }, {
                name: "Ngó"
            }, {
                name: "Ngoáy (đuôi)"
            }, {
                name: "Ngồi"
            }, {
                name: "Nhào"
            }, {
                name: "Nhảy"
            }, {
                name: "Nhắc"
            }, {
                name: "Nhắn"
            }, {
                name: "Nhét"
            }, {
                name: "Nhổ"
            }, {
                name: "Nhồi"
            }, {
                name: "Nhớ"
            }, {
                name: "Nhún (nhảy)"
            }, {
                name: "Ninh"
            }, {
                name: "Níu giữ"
            }, {
                name: "Nói"
            }, {
                name: "Nổi"
            }, {
                name: "Nôn"
            }, {
                name: "Nuôi"
            }, {
                name: "Nuốt"
            }, {
                name: "Nướng"
            }, {
                name: "Pha trộn"
            }, {
                name: "Phá (hoại)"
            }, {
                name: "Phán (xét)"
            }, {
                name: "Phang"
            }, {
                name: "Phanh hãm"
            }, {
                name: "Phát (tin)"
            }, {
                name: "Phạt"
            }, {
                name: "Phay"
            }, {
                name: "Phất (cờ)"
            }, {
                name: "Phẩy (tay)"
            }, {
                name: "Phết"
            }, {
                name: "Phệt"
            }, {
                name: "Phi (ngựa)"
            }, {
                name: "Phóng (tên)"
            }, {
                name: "Phơi"
            }, {
                name: "Phun (nước)"
            }, {
                name: "Quai (búa)"
            }, {
                name: "Quay"
            }, {
                name: "Quăng"
            }, {
                name: "Quét dọn"
            }, {
                name: "Quẹt"
            }, {
                name: "Quên"
            }, {
                name: "Quốc (đất)"
            }, {
                name: "Rạch"
            }, {
                name: "Rán"
            }, {
                name: "Rèn"
            }, {
                name: "Rọi"
            }, {
                name: "Rót"
            }, {
                name: "Rơi"
            }, {
                name: "Rời"
            }, {
                name: "Rúc"
            }, {
                name: "Rung"
            }, {
                name: "Rửa"
            }, {
                name: "San (phẳng)"
            }, {
                name: "Sàng"
            }, {
                name: "Sáng tác"
            }, {
                name: "Sao chép"
            }, {
                name: "Sấy (khô)"
            }, {
                name: "Soi"
            }, {
                name: "Són"
            }, {
                name: "Soạn"
            }, {
                name: "Sốt"
            }, {
                name: "Sờ (mó)"
            }, {
                name: "Sơn"
            }, {
                name: "Sút (bóng)"
            }, {
                name: "Sủa"
            }, {
                name: "Sụt sịt"
            }, {
                name: "Suy nghĩ"
            }, {
                name: "Sửa (chữa)"
            }, {
                name: "Tán (đinh)"
            }, {
                name: "Tát (nước)"
            }, {
                name: "Tạt"
            }, {
                name: "Tắt (máy)"
            }, {
                name: "Tắm"
            }, {
                name: "Tiêm"
            }, {
                name: "Tìm kiếm"
            }, {
                name: "Tính (toán)"
            }, {
                name: "Tiện"
            }, {
                name: "Thả"
            }, {
                name: "Tháo"
            }, {
                name: "Thăm (hỏi)"
            }, {
                name: "Thắp lửa"
            }, {
                name: "Thồ (hàng)"
            }, {
                name: "Thổi"
            }, {
                name: "Thở"
            }, {
                name: "Thu (hoạch)"
            }, {
                name: "Thuốn"
            }, {
                name: "Thương"
            }, {
                name: "Tóm"
            }, {
                name: "Tô (vẽ)"
            }, {
                name: "Tra"
            }, {
                name: "Tranh giành"
            }, {
                name: "Tránh (né)"
            }, {
                name: "Treo"
            }, {
                name: "Trèo"
            }, {
                name: "Trói"
            }, {
                name: "Trộm"
            }, {
                name: "Trốn chạy"
            }, {
                name: "Trộn"
            }, {
                name: "Trồng (cây)"
            }, {
                name: "Trừ"
            }, {
                name: "Trườn"
            }, {
                name: "Trượt"
            }, {
                name: "Truyền (tin)"
            }, {
                name: "Tung"
            }, {
                name: "Tưới (nước)"
            }, {
                name: "Ủ (rượu)"
            }, {
                name: "Ủi"
            }, {
                name: "Uốn"
            }, {
                name: "Uống"
            }, {
                name: "Úp"
            }, {
                name: "Vá"
            }, {
                name: "Vả"
            }, {
                name: "Vác"
            }, {
                name: "Vái"
            }, {
                name: "Van (xin)"
            }, {
                name: "Vay"
            }, {
                name: "Vặn (xoắn)"
            }, {
                name: "Vật"
            }, {
                name: "Vẫy (tai)"
            }, {
                name: "Vẽ"
            }, {
                name: "Vét"
            }, {
                name: "Viết"
            }, {
                name: "Vo tròn"
            }, {
                name: "Vồ (ếch)"
            }, {
                name: "Vớt"
            }, {
                name: "Vùi"
            }, {
                name: "Vùng lên"
            }, {
                name: "Vuốt"
            }, {
                name: "Vụt"
            }, {
                name: "Vươn ra"
            }, {
                name: "Vượt lên"
            }, {
                name: "Xả (nước)"
            }, {
                name: "Xác thực"
            }, {
                name: "Xay"
            }, {
                name: "Xắn"
            }, {
                name: "Xây"
            }, {
                name: "Xé"
            }, {
                name: "Xẻ (gỗ)"
            }, {
                name: "Xem"
            }, {
                name: "Xén"
            }, {
                name: "Xét"
            }, {
                name: "Xếp"
            }, {
                name: "Xí xoá"
            }, {
                name: "Xin"
            }, {
                name: "Xiên"
            }, {
                name: "Xịt"
            }, {
                name: "Xỏ"
            }, {
                name: "Xoa"
            }, {
                name: "Xoá"
            }, {
                name: "Xoã (cánh)"
            }, {
                name: "Xoay"
            }, {
                name: "Xoáy"
            }, {
                name: "Xóc"
            }, {
                name: "Xúc"
            }, {
                name: "Xui"
            }, {
                name: "Xúi"
            }, {
                name: "Xuyên"
            }, {
                name: "Yêu (cầu)"
            }]
        }],

        faculties: [{
            name: "Phòng chống",
            value: []
        }, {
            name: "Tăng",
            value: []
        }, {
            name: "Giảm",
            value: []
        }, {
            name: "Chia cắt",
            value: []
        }, {
            name: "Hàn gắn",
            value: []
        }, {
            name: "Bảo vệ",
            value: []
        }, {
            name: "Lưu trữ",
            value: []
        }, {
            name: "Ngăn cách",
            value: []
        }, {
            name: "Duy trì",
            value: []
        }, {
            name: "Nắm giữ",
            value: []
        }, {
            name: "Hiển thị",
            value: []
        }, {
            name: "Truyền dẫn",
            value: []
        }, {
            name: "Kích thích",
            value: []
        }]
    }
};

export default rootData;
