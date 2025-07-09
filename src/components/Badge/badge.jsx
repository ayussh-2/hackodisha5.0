"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { toPng } from "html-to-image";
import ReactCrop, { centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import {
    download,
    upload,
    share,
    hacklogo,
    win_icon,
    default_avatar,
    namespace,
    exclamation,
} from "@/config/Badge";
import SectionTitle from "../shared/section-title";
import toast from "react-hot-toast";

function getCroppedImg(image, crop, targetWidth = 512) {
    const canvas = document.createElement("canvas");
    canvas.width = targetWidth;
    canvas.height = targetWidth;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
        throw new Error("Could not get canvas context");
    }

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        targetWidth,
        targetWidth
    );

    return new Promise((resolve) => {
        resolve(canvas.toDataURL("image/png"));
    });
}

const Badge = () => {
    const [name, setName] = useState("YOUR NAME");
    const [avatar, setAvatar] = useState(default_avatar);
    const badgeRef = useRef(null);
    const fileInputRef = useRef(null);
    const imgRef = useRef(null);

    const [showCropper, setShowCropper] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingText, setLoadingText] = useState("");

    const [upImg, setUpImg] = useState(null);
    const [crop, setCrop] = useState();
    const [completedCrop, setCompletedCrop] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value || "YOUR NAME");
    };

    const onImageLoad = (e) => {
        imgRef.current = e.currentTarget;
        const { width, height } = e.currentTarget;
        const newCrop = centerCrop(
            makeAspectCrop({ unit: "%", width: 90 }, 1, width, height),
            width,
            height
        );
        setCrop(newCrop);
    };

    const handleAvatarChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setUpImg(reader.result?.toString() || "");
                setShowCropper(true);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleCropImage = async () => {
        if (completedCrop?.width && completedCrop?.height && imgRef.current) {
            setIsLoading(true);
            setLoadingText("Processing image...");

            try {
                const croppedImageUrl = await getCroppedImg(
                    imgRef.current,
                    completedCrop
                );
                setAvatar(croppedImageUrl);
                setShowCropper(false);
                setUpImg(null);
            } catch (error) {
                console.error("Error cropping image:", error);
                toast.error("Failed to crop image. Please try again.");
            } finally {
                setIsLoading(false);
                setLoadingText("");
            }
        }
    };

    const handleDownload = () => {
        if (name === "YOUR NAME") {
            toast.error("Please enter your name before downloading the badge.");
            return;
        }

        const node = badgeRef.current;
        if (node === null) return;

        setIsLoading(true);
        setLoadingText("Generating badge...");

        toPng(node, {
            cacheBust: true,
            pixelRatio: 2,
            width: node.offsetWidth,
            height: node.offsetHeight,
        })
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = "my-hackodisha-badge.png";
                link.href = dataUrl;
                link.click();
                toast.success("Badge downloaded successfully!");
            })
            .catch((err) => {
                console.error("Failed to download image. Error:", err);
                toast.error("Sorry, the badge could not be downloaded.");
            })
            .finally(() => {
                setIsLoading(false);
                setLoadingText("");
            });
    };

    const handleShare = (platform) => {
        const text = `Excited to be a part of HackOdisha 5.0! Check out my official badge. Join me and let's build something amazing together. #HackOdisha #WebWizNITR @webwiz.nitr`;
        const encodedText = encodeURIComponent(text);
        const eventUrl = "https://hackodisha-4.devfolio.co/";
        const encodedUrl = encodeURIComponent(eventUrl);

        let url = "";

        if (platform === "twitter") {
            url = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        } else if (platform === "linkedin") {
            url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&text=${encodedText}`;
        }

        if (url) {
            window.open(url, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <>
            {/* Loader Modal */}
            {isLoading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
                    <div className="relative w-full max-w-sm rounded-3xl border-4 border-solid border-black bg-white p-8 shadow-[5px_5px_0px_#000000,1px_1px_0px_#000000,2px_2px_0px_#000000,3px_3px_0px_#000000,4px_4px_0px_#000000]">
                        <div className="flex flex-col items-center gap-6">
                            <div className="relative h-16 w-16">
                                <div className="absolute inset-0 rounded-full border-4 border-gray-300"></div>
                                <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#bc82fe] border-r-[#bc82fe]"></div>
                            </div>
                            <div className="text-center">
                                <h3 className="font-['Bricolage_Grotesque',_Helvetica] text-2xl font-bold text-black">
                                    Please Wait
                                </h3>
                                <p className="mt-2 font-['Archivo',_Helvetica] text-lg text-gray-600">
                                    {loadingText}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showCropper && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
                    <div className="relative w-full max-w-lg rounded-3xl border-4 border-solid border-black bg-[#d3aeff] p-6 shadow-[5px_5px_0px_#000000,1px_1px_0px_#000000,2px_2px_0px_#000000,3px_3px_0px_#000000,4px_4px_0px_#000000]">
                        <h3 className="mb-4 text-center font-['Bricolage_Grotesque',_Helvetica] text-3xl font-bold text-black">
                            Crop Your Avatar
                        </h3>
                        <div
                            className="flex items-center justify-center rounded-2xl border-2 border-black bg-black/10 p-1"
                            style={{ minHeight: "300px" }}
                        >
                            <ReactCrop
                                crop={crop}
                                onChange={(_, percentCrop) =>
                                    setCrop(percentCrop)
                                }
                                onComplete={(c) => setCompletedCrop(c)}
                                aspect={1}
                                minWidth={100}
                            >
                                <img
                                    ref={imgRef}
                                    alt="Crop me"
                                    src={upImg || ""}
                                    onLoad={onImageLoad}
                                    style={{ maxHeight: "60vh" }}
                                />
                            </ReactCrop>
                        </div>
                        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
                            <button
                                onClick={() => setShowCropper(false)}
                                disabled={isLoading}
                                className="flex w-full transform items-center justify-center gap-2 rounded-lg border-2 border-solid border-black bg-[#f0e4ff] py-3 font-['Archivo',_Helvetica] text-xl font-medium text-black transition-transform duration-200 ease-in-out hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleCropImage}
                                disabled={isLoading}
                                className="flex w-full transform items-center justify-center gap-2 rounded-lg border-2 border-solid border-black bg-[#fede64] py-3 font-['Archivo',_Helvetica] text-xl font-bold text-black transition-transform duration-200 ease-in-out hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                            >
                                {isLoading &&
                                loadingText.includes("Processing") ? (
                                    <>
                                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-transparent border-t-black"></div>
                                        Processing...
                                    </>
                                ) : (
                                    "Done"
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showShareModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
                    <div className="relative w-full max-w-md rounded-3xl border-2 border-solid border-black bg-white p-6 ">
                        <button
                            onClick={() => setShowShareModal(false)}
                            className="absolute top-3 right-3 transform p-1 text-black transition-transform duration-200 ease-in-out hover:scale-125"
                            aria-label="Close"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <Image
                            width={80}
                            height={80}
                            src={hacklogo}
                            alt="HackOdisha Logo"
                        />
                        <h3 className="mb-4 pt-5 text-center font-['Bricolage_Grotesque',_Helvetica] text-3xl font-bold text-black">
                            Share Your Badge
                        </h3>
                        <div
                            className="mb-6 rounded-xl border-black bg-[#f0e4ff] p-3 text-center"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23000000' stroke-width='3' stroke-dasharray='8%2c 10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
                            }}
                        >
                            <p className="font-['Archivo',_Helvetica] text-base font-medium text-black">
                                <span className="font-bold">Important:</span>{" "}
                                Make sure to download your badge first! You'll
                                need to attach it manually.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => handleShare("twitter")}
                                className="flex w-full transform items-center justify-center gap-3 rounded-lg border-2 border-solid border-black bg-[#212121] py-3 font-['Archivo',_Helvetica] text-xl font-bold text-white transition-transform duration-200 ease-in-out hover:scale-105"
                            >
                                <Image
                                    src="https://img.icons8.com/color/96/twitterx--v1.png"
                                    alt="x"
                                    width={48}
                                    height={48}
                                />
                                Share on Twitter
                            </button>
                            <button
                                onClick={() => handleShare("linkedin")}
                                className="flex w-full transform items-center justify-center gap-3 rounded-lg   bg-[#0078D4] py-3 font-['Archivo',_Helvetica] text-xl font-bold text-white transition-transform duration-200 ease-in-out hover:scale-105"
                            >
                                <Image
                                    src="https://img.icons8.com/fluency/96/linkedin.png"
                                    alt="LinkedIn"
                                    width={48}
                                    height={48}
                                    className=""
                                />
                                Share on LinkedIn
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* <header className="relative mb-0 flex w-screen justify-center bg-[#bc82fe] py-6 sm:py-8">
        <div className="absolute left-0 top-0 w-full h-1/2 bg-[#efe7f7] z-0" />
        <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 border-t-[3px] border-black" />
        <div className="relative max-w-2xl rounded-2xl bg-white px-3 py-4 shadow-[4px_4px_0px_#000000,-3px_-4px_0px_#000000]">
          <div
            className="h-full w-full rounded-lg p-3"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23000000' stroke-width='4' stroke-dasharray='8%2c 18' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
            }}
          >
            <h1 className="text-center font-['Clash_Display-Semibold',_Helvetica] text-4xl font-normal tracking-widest text-black sm:text-5xl lg:text-6xl">
              CREATE YOUR BADGE
            </h1>
          </div>
        </div>
      </header> */}

            <SectionTitle
                title={"CREATE YOUR BADGE"}
                lineGradient="white-purple"
            />

            <div className="min-h-screen bg-[#bc82fe] p-2 sm:p-6 !pt-20">
                <main className="mx-auto flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch">
                    <div
                        ref={badgeRef}
                        className="flex w-full max-w-xl flex-col rounded-3xl border-4 border-solid border-black bg-white shadow-[5px_5px_0px_#000000,1px_1px_0px_#000000,2px_2px_0px_#000000,3px_3px_0px_#000000,4px_4px_0px_#000000] p-4"
                    >
                        <div className="flex flex-grow flex-col items-end gap-4">
                            <div className="flex w-full items-center justify-between">
                                <Image
                                    className="h-4 w-auto sm:h-6"
                                    alt="Webwiz Logo"
                                    src={hacklogo}
                                    width={150}
                                    height={40}
                                />
                                <Image
                                    className="h-8 w-auto object-contain sm:h-10"
                                    alt="Namespace Community Logo"
                                    src={namespace}
                                    width={150}
                                    height={40}
                                />
                            </div>
                            <div
                                className="flex w-full flex-col items-center justify-center gap-4 rounded-3xl p-4 sm:p-6"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='%23000000' stroke-width='4' stroke-dasharray='8%2c 18' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
                                }}
                            >
                                <div className="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-72 lg:w-72">
                                    <div className="absolute left-1 top-1 h-full w-full rounded-4xl border-2 border-solid border-black" />
                                    <Image
                                        className="absolute left-0 top-0 h-full w-full rounded-3xl object-cover"
                                        alt="User Avatar"
                                        src={avatar}
                                        fill
                                    />
                                </div>
                                <div
                                    className="flex w-full items-center justify-center rounded-xl border-2 border-solid border-black p-3"
                                    style={{
                                        boxShadow:
                                            "3px 3px 0px white, 5px 5px 0px black, 2px 5px 0px black, 5px 2px 0px black",
                                    }}
                                >
                                    <h2 className="w-fit break-all text-center font-['Bricolage_Grotesque',_Helvetica] text-3xl font-extrabold text-[#000000f0] sm:text-4xl">
                                        {name}
                                    </h2>
                                </div>
                            </div>
                            <div className="mt-auto flex w-full flex-col gap-4 rounded-3xl border-2 border-solid border-black bg-white p-2">
                                <div className="flex items-center gap-2 sm:gap-4">
                                    <div className="flex flex-shrink-0 flex-col items-center rounded-2xl border border-solid border-black bg-[#902fff] p-2">
                                        <Image
                                            height={64}
                                            width={64}
                                            src="/Images/qr-code.png"
                                            alt="qr code"
                                        />
                                        <p className="mt-1 font-['Archivo',_Helvetica] text-lg font-semibold text-white">
                                            Scan me
                                        </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="font-['Bricolage_Grotesque',_Helvetica] text-2xl font-semibold text-black sm:text-3xl">
                                            HackOdisha 5.0
                                        </h3>
                                        <p className="font-['Archivo',_Helvetica] text-lg font-semibold text-black sm:text-xl">
                                            06-07 September
                                        </p>
                                        <p className="font-['Archivo',_Helvetica] text-lg font-semibold text-black sm:text-xl">
                                            2.5 Lakh+ Worth Prize
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Controls and Info Card */}
                    <div className="relative flex w-full max-w-xl flex-col rounded-3xl border-4 border-solid border-black bg-[#d3aeff] p-6 pt-8 shadow-[5px_5px_0px_#000000,1px_1px_0px_#000000,2px_2px_0px_#000000,3px_3px_0px_#000000,4px_4px_0px_#000000] sm:p-10 sm:pb-4 sm:pt-12">
                        <div className="flex h-full flex-grow flex-col justify-between gap-6">
                            <div className="flex flex-col gap-6">
                                <div className="flex h-14 w-full items-center justify-center rounded-xl border-2 border-solid border-black bg-white px-4 shadow-[4px_4px_0px_#000000] sm:h-16">
                                    <input
                                        type="text"
                                        onChange={handleNameChange}
                                        placeholder="Enter Your Name here...."
                                        className="w-full bg-transparent font-['Archivo',_Helvetica] text-xl font-medium text-black placeholder-black/30 outline-none sm:text-2xl"
                                    />
                                </div>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleAvatarChange}
                                    accept="image/*"
                                    className="hidden"
                                />
                                <button
                                    onClick={() =>
                                        fileInputRef.current?.click()
                                    }
                                    className="flex h-14 w-full transform items-center justify-center gap-4 rounded-xl border border-solid bg-black transition-transform duration-200 ease-in-out hover:scale-105 sm:h-16"
                                >
                                    <Image
                                        width={32}
                                        height={32}
                                        alt="Upload"
                                        src={upload}
                                    />
                                    <span className="font-['Archivo',_Helvetica] text-2xl font-normal text-white/90">
                                        Upload your photo
                                    </span>
                                </button>
                            </div>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <button
                                    onClick={handleDownload}
                                    disabled={isLoading}
                                    className="flex w-full transform items-center justify-center gap-2 rounded-lg border-2 border-solid border-black bg-[#f0e4ff] py-2 transition-transform duration-200 ease-in-out hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                                >
                                    {isLoading &&
                                    loadingText.includes("Generating") ? (
                                        <div className="h-7 w-7 animate-spin rounded-full border-2 border-transparent border-t-black"></div>
                                    ) : (
                                        <Image
                                            width={28}
                                            height={28}
                                            alt="Download"
                                            src={download}
                                        />
                                    )}
                                    <span className="font-['Archivo',_Helvetica] text-xl text-black">
                                        {isLoading &&
                                        loadingText.includes("Generating")
                                            ? "Generating..."
                                            : "Download"}
                                    </span>
                                </button>
                                <button
                                    onClick={() => setShowShareModal(true)}
                                    disabled={isLoading}
                                    className="flex w-full transform items-center justify-center gap-2 rounded-lg border-2 border-solid border-black bg-[#fede64] py-2 transition-transform duration-200 ease-in-out hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                                >
                                    <Image
                                        width={28}
                                        height={28}
                                        alt="Share"
                                        src={share}
                                    />
                                    <span className="font-['Archivo',_Helvetica] text-xl text-black">
                                        Share
                                    </span>
                                </button>
                            </div>
                            <div className="rounded-3xl border-2 border-solid border-black bg-white p-4">
                                <div className="flex flex-col items-center gap-4 text-center">
                                    <div className="flex flex-wrap items-center justify-center gap-2">
                                        <h4 className="font-['Bricolage_Grotesque',_Helvetica] text-2xl font-bold text-black">
                                            Bonus Point Alert
                                        </h4>
                                        <div className="flex items-center">
                                            <Image
                                                width={20}
                                                height={20}
                                                alt="Alert Icon"
                                                src={exclamation}
                                            />
                                            <Image
                                                width={20}
                                                height={20}
                                                alt="Alert Icon"
                                                src={exclamation}
                                            />
                                            <Image
                                                width={20}
                                                height={20}
                                                alt="Alert Icon"
                                                src={exclamation}
                                            />
                                        </div>
                                    </div>
                                    <p className="font-['Archivo',_Helvetica] text-base text-[#2e2e2e]">
                                        Need bonus points? —
                                        <span className="font-semibold">
                                            {" "}
                                            Whole team needs to share their
                                            badges
                                        </span>
                                        <span className="font-medium">
                                            {" "}
                                            on social media
                                        </span>{" "}
                                        & tag @webwiz.nitr
                                    </p>
                                    <p className="font-['Archivo',_Helvetica] text-base text-[#2e2e2e]">
                                        Other teams are already grabbing bonus
                                        points. Don’t let your team miss out.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Image
                            className="absolute -bottom-5 -left-4 w-28 sm:-bottom-5 sm:-left-10 sm:w-32"
                            alt="Decorative graphic"
                            src={win_icon}
                            width={128}
                            height={128}
                        />
                    </div>
                </main>
            </div>
        </>
    );
};

export default Badge;
